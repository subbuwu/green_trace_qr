import { NextResponse } from 'next/server';
import { PrismaClient, UserType, BusinessStatus } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const prisma = new PrismaClient();

// Schema validation for user signup
const userSignupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  userType: z.enum(['user', 'business']),
  location: z.string().optional(),
  receiveUpdates: z.boolean().optional(),
  businessName: z.string().optional(),
  businessAddress: z.string().optional(),
  businessType: z.string().optional(),
  rememberMe: z.boolean().optional()
});

// Map frontend userType to database enum
const mapUserType = (type: 'user' | 'business'): UserType => {
  return type === 'user' ? UserType.CONSUMER : UserType.BUSINESS;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate request data
    const validatedData = userSignupSchema.parse(data);
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists", errors: { email: ["Email is already registered"] } },
        { status: 400 }
      );
    }
    
    // Map frontend userType to database enum
    const userTypeEnum = mapUserType(validatedData.userType);
    
    // Create verification token
    const verificationToken = uuidv4();
    
    // Create user with transaction to ensure all related records are created
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          password: validatedData.password, // Store password directly
          userType: userTypeEnum,
          verified: false,
          verificationToken,
          
        }
      });
      
      // Create consumer or business profile based on user type
      if (userTypeEnum === UserType.CONSUMER) {
        await tx.consumer.create({
          data: {
            userId: user.id,
            points: 0,
            location: validatedData.location || '',
            receiveUpdates: validatedData.receiveUpdates || false,
          }
        });
      } else if (userTypeEnum === UserType.BUSINESS) {
        // Validate business fields
        if (!validatedData.businessName || !validatedData.businessAddress || !validatedData.businessType) {
          throw new Error('Business information is required');
        }
        
        await tx.business.create({
          data: {
            userId: user.id,
            businessName: validatedData.businessName,
            businessAddress: validatedData.businessAddress,
            businessType: validatedData.businessType,
            status: BusinessStatus.APPROVED,
            points: 0
          }
        });
      }
      
      return user;
    });
    
    // Generate JWT token
    const token = jwt.sign(
      { id: result.id, email: result.email, userType: result.userType },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: validatedData.rememberMe ? '30d' : '1d' }
    );
    
    // Create session
    const expiresAt = new Date();
    if (validatedData.rememberMe) {
      expiresAt.setDate(expiresAt.getDate() + 30); // 30 days
    } else {
      expiresAt.setDate(expiresAt.getDate() + 1); // 1 day
    }
    
    await prisma.session.create({
      data: {
        userId: result.id,
        token,
        expiresAt
      }
    });
    
    return NextResponse.json({
      user: {
        id: result.id,
        name: result.name,
        email: result.email,
        phone: result.phone,
        userType: result.userType === UserType.CONSUMER ? 'user' : 'business',
        verified: result.verified
      },
      token
    });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.reduce((acc, curr) => {
        const field = curr.path[0] as string;
        if (!acc[field]) acc[field] = [];
        acc[field].push(curr.message);
        return acc;
      }, {} as Record<string, string[]>);
      
      return NextResponse.json(
        { error: "Validation failed", errors: formattedErrors },
        { status: 400 }
      );
    }
    
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
} 