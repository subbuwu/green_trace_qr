import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, UserType, WasteType } from '@prisma/client';
import { validateToken } from '@/lib/auth-helpers';
import { z } from 'zod';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

// Schema validation for QR code generation
const qrCodeSchema = z.object({
  wasteType: z.enum(['PAPER', 'PLASTIC', 'GLASS', 'METAL', 'ELECTRONICS', 'ORGANIC', 'TEXTILE', 'HAZARDOUS', 'OTHER']),
  quantity: z.number().positive(),
  unit: z.string().min(1),
  description: z.string().optional(),
  photos: z.array(z.string()).optional()
});

export async function POST(request: NextRequest) {
  try {
    // Validate token
    const { isValid, decoded, error } = await validateToken(request);
    
    if (!isValid || !decoded) {
      return NextResponse.json(
        { success: false, error: error || 'Not authenticated' },
        { status: 401 }
      );
    }
    
    // Check if user is a consumer
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    
    if (user.userType !== UserType.CONSUMER) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Only consumers can generate QR codes" },
        { status: 403 }
      );
    }
    
    // Get consumer ID
    const consumer = await prisma.consumer.findUnique({
      where: { userId: user.id }
    });
    
    if (!consumer) {
      return NextResponse.json(
        { success: false, error: "Consumer profile not found" },
        { status: 404 }
      );
    }
    
    // Parse and validate request body
    const body = await request.json();
    const validatedData = qrCodeSchema.parse(body);

    // Generate a unique ID for the QR code
    const qrCodeId = uuidv4();
    
    // Create QR code data that will be encoded
    const qrCodeURLData = {
      id: qrCodeId,
      consumerId: consumer.id,
      wasteType: validatedData.wasteType as WasteType,
      quantity: validatedData.quantity,
      unit: validatedData.unit,
      description: validatedData.description || '',
      photos: validatedData.photos || [],
      timestamp: new Date().toISOString()
    };
    
    // Generate QR code image (as data URL)
    const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(qrCodeURLData), {
      errorCorrectionLevel: 'H',
      margin: 1,
      scale: 8,
      color: {
        dark: '#004d00',  // Green color for dots
        light: '#ffffff'  // White background
      }
    });
    
    // Save QR code to database
    const qrCode = await prisma.qRCode.create({
      data: {
        id: qrCodeId,
        consumerId: consumer.id,
        wasteType: validatedData.wasteType as WasteType,
        quantity: validatedData.quantity,
        unit: validatedData.unit,
        description: validatedData.description || '',
        photos: validatedData.photos || [],
        qrCodeUrl: qrCodeUrl,
        isVerified: false
      }
    });
    
    return NextResponse.json({
      success: true,
      qrCode: {
        id: qrCode.id,
        wasteType: qrCode.wasteType,
        quantity: qrCode.quantity,
        unit: qrCode.unit,
        qrCodeUrl: qrCode.qrCodeUrl,
        createdAt: qrCode.createdAt,
        description: qrCode.description,
        isVerified: qrCode.isVerified
      }
    });
    
  } catch (error) {
    console.error("QR code generation error:", error);
    
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.reduce((acc, curr) => {
        const field = curr.path[0] as string;
        if (!acc[field]) acc[field] = [];
        acc[field].push(curr.message);
        return acc;
      }, {} as Record<string, string[]>);
      
      return NextResponse.json(
        { 
          success: false,
          error: "Validation failed",
          errors: formattedErrors
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}