import { NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const prisma = new PrismaClient();

// Schema validation for user login
const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  userType: z.enum(['user', 'business']),
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
    const validatedData = userLoginSchema.parse(data);
    
    // Map frontend userType to database enum
    const userTypeEnum = mapUserType(validatedData.userType);
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials", errors: { email: ["Invalid email or password"] } },
        { status: 400 }
      );
    }
    
    // Check if user type matches
    if (user.userType !== userTypeEnum) {
      return NextResponse.json(
        { 
          error: `This email is registered as a ${user.userType === UserType.CONSUMER ? 'user' : 'business'}, not a ${validatedData.userType}`,
          errors: { userType: [`This email is registered as a ${user.userType === UserType.CONSUMER ? 'user' : 'business'}`] }
        },
        { status: 400 }
      );
    }
    
    // Verify password directly
    if (validatedData.password !== user.password) {
      return NextResponse.json(
        { error: "Invalid credentials", errors: { password: ["Invalid email or password"] } },
        { status: 400 }
      );
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, userType: user.userType },
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
        userId: user.id,
        token,
        expiresAt
      }
    });
    
    // Get user profile data based on user type
    let profileData = null;
    
    if (user.userType === UserType.CONSUMER) {
      profileData = await prisma.consumer.findUnique({
        where: { userId: user.id },
        select: {
          id: true,
          points: true,
          location: true
        }
      });
    } else if (user.userType === UserType.BUSINESS) {
      profileData = await prisma.business.findUnique({
        where: { userId: user.id },
        select: {
          id: true,
          businessName: true,
          businessAddress: true,
          businessType: true,
          status: true,
          points: true
        }
      });
    }
    
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userType: user.userType === UserType.CONSUMER ? 'user' : 'business',
        verified: user.verified,
        avatar: user.avatar,
        profile: profileData
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
    
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Failed to login" },
      { status: 500 }
    );
  }
} 