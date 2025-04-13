import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';

const prisma = new PrismaClient();

// Validation schema for business profile update
const businessProfileSchema = z.object({
  businessName: z.string().min(1, { message: "Business name is required" }),
  businessAddress: z.string().min(1, { message: "Business address is required" }),
  businessType: z.string().min(1, { message: "Business type is required" }),
  description: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

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

    const body = await request.json();
    const validatedData = businessProfileSchema.parse(body);

    // Update both User and Business records
    const [updatedUser, updatedBusiness] = await prisma.$transaction([
      prisma.user.update({
        where: { id: decoded.id },
        data: {
          email: validatedData.email || undefined,
          phone: validatedData.phone || undefined,
        },
      }),
      prisma.business.update({
        where: { userId: decoded.id },
        data: {
          businessName: validatedData.businessName,
          businessAddress: validatedData.businessAddress,
          businessType: validatedData.businessType,
          description: validatedData.description || undefined,
          website: validatedData.website || undefined,
        },
      }),
    ]);

    return NextResponse.json({
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
      },
      business: {
        id: updatedBusiness.id,
        businessName: updatedBusiness.businessName,
        businessAddress: updatedBusiness.businessAddress,
        businessType: updatedBusiness.businessType,
        description: updatedBusiness.description,
        website: updatedBusiness.website,
      },
    });
  } catch (error) {
    console.error("Error updating business profile:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to update business profile" },
      { status: 500 }
    );
  }
} 