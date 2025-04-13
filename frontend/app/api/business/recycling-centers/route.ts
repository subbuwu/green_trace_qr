import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType, WasteType, Prisma } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

const recyclingCenterSchema = z.object({
  name: z.string().min(1, { message: "Center name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  operatingHours: z.record(z.string()).optional(),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),
  image: z.string().optional(),
  description: z.string().optional(),
  acceptedWasteTypes: z.array(z.enum([
    "PAPER",
    "PLASTIC",
    "GLASS",
    "METAL",
    "ELECTRONICS",
    "ORGANIC",
    "TEXTILE",
    "HAZARDOUS",
    "OTHER"
  ])),
  pointsPerWasteType: z.record(z.number()).optional(),
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
    
    // Fetch all recycling centers for this business
    const centers = await prisma.recyclingCenter.findMany({
      where: {
        businessId: user.business?.id
      }
    });
    
    return NextResponse.json({ centers });
  } catch (error) {
    console.error('Error fetching recycling centers:', error);
    return NextResponse.json({ error: 'Failed to fetch recycling centers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
    
    // Verify token
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
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
    const validatedData = recyclingCenterSchema.parse(body);
    
    // Create the recycling center
    const recyclingCenter = await prisma.recyclingCenter.create({
      data: {
        businessId: user.business!.id,
        ...validatedData,
      },
    });
    
    return NextResponse.json({ center: recyclingCenter });
  } catch (error) {
    console.error('Error creating recycling center:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Failed to create recycling center' },
      { status: 500 }
    );
  }
}