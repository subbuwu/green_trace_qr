// app/api/business/recycling-centers/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType, WasteType, Prisma } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';

const prisma = new PrismaClient();

const recyclingCenterUpdateSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  address: z.string().min(1, { message: "Address is required" }).optional(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  operatingHours: z.record(z.string()).optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  website: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  acceptedWasteTypes: z.array(z.nativeEnum(WasteType)).optional(),
  pointsPerWasteType: z.record(z.number()).optional().nullable(),
  isActive: z.boolean().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    if (user.userType !== UserType.BUSINESS || !user.business) {
      return NextResponse.json({ error: 'Unauthorized: Not a business account' }, { status: 403 });
    }
    
    // Check if the recycling center exists and belongs to this business
    const existingCenter = await prisma.recyclingCenter.findFirst({
      where: {
        id: params.id,
        businessId: user.business.id
      }
    });
    
    if (!existingCenter) {
      return NextResponse.json({ error: 'Recycling center not found or does not belong to this business' }, { status: 404 });
    }
    
    const data = await request.json();
    
    // Validate request data
    try {
      const validatedData = recyclingCenterUpdateSchema.parse(data);
      
      // Update recycling center
      const updatedCenter = await prisma.recyclingCenter.update({
        where: { id: params.id },
        data: validatedData as Prisma.RecyclingCenterUpdateInput
      });
      
      return NextResponse.json({
        success: true,
        center: updatedCenter
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
    console.error('Error updating recycling center:', error);
    return NextResponse.json({ error: 'Failed to update recycling center' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    if (user.userType !== UserType.BUSINESS || !user.business) {
      return NextResponse.json({ error: 'Unauthorized: Not a business account' }, { status: 403 });
    }
    
    // Check if the recycling center exists and belongs to this business
    const existingCenter = await prisma.recyclingCenter.findFirst({
      where: {
        id: params.id,
        businessId: user.business.id
      }
    });
    
    if (!existingCenter) {
      return NextResponse.json({ error: 'Recycling center not found or does not belong to this business' }, { status: 404 });
    }
    
    // Instead of actually deleting, just mark as inactive
    const updatedCenter = await prisma.recyclingCenter.update({
      where: { id: params.id },
      data: {
        isActive: false
      }
    });
    
    return NextResponse.json({
      success: true,
      message: 'Recycling center deactivated successfully'
    });
  } catch (error) {
    console.error('Error deactivating recycling center:', error);
    return NextResponse.json({ error: 'Failed to deactivate recycling center' }, { status: 500 });
  }
}