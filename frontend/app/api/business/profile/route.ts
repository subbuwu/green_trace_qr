import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';

const prisma = new PrismaClient();

// Schema for profile update
const profileUpdateSchema = z.object({
  businessName: z.string().min(1, { message: "Business name is required" }),
  businessAddress: z.string().min(1, { message: "Business address is required" }),
  businessType: z.string().min(1, { message: "Business type is required" }),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json({ error }, { status: 401 });
    }
    
    // Verify user is a business
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        business: true
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    if (user.userType !== UserType.BUSINESS) {
      return NextResponse.json({ error: 'Unauthorized: Not a business account' }, { status: 403 });
    }
    
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        userType: 'business',
        verified: user.verified,
        profile: user.business
      }
    });
    
  } catch (error) {
    console.error('Error fetching business profile:', error);
    return NextResponse.json({ error: 'Failed to fetch business profile' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json({ error }, { status: 401 });
    }
    
    // Verify user is a business
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        business: true
      }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    if (user.userType !== UserType.BUSINESS) {
      return NextResponse.json({ error: 'Unauthorized: Not a business account' }, { status: 403 });
    }
    
    const data = await request.json();
    
    // Validate request data
    try {
      const validatedData = profileUpdateSchema.parse(data);
      
      // Update user basic info
      await prisma.user.update({
        where: { id: user.id },
        data: {
          name: validatedData.email ? user.name : user.name, // Keep same name
          phone: validatedData.phone,
          email: validatedData.email || user.email,
        }
      });
      
      // Update business profile
      const updatedBusiness = await prisma.business.update({
        where: { userId: user.id },
        data: {
          businessName: validatedData.businessName,
          businessAddress: validatedData.businessAddress,
          businessType: validatedData.businessType,
        }
      });
      
      return NextResponse.json({
        success: true,
        business: updatedBusiness
      });
      
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const formattedErrors = validationError.errors.reduce((acc, curr) => {
          const field = curr.path[0] as string;
          if (!acc[field]) acc[field] = [];
          acc[field].push(curr.message);
          return acc;
        }, {} as Record<string, string[]>);
        
        return NextResponse.json(
          { error: 'Validation failed', errors: formattedErrors },
          { status: 400 }
        );
      }
      
      throw validationError;
    }
    
  } catch (error) {
    console.error('Error updating business profile:', error);
    return NextResponse.json({ error: 'Failed to update business profile' }, { status: 500 });
  }
}