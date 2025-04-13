import { NextResponse } from 'next/server';
import { PrismaClient, UserType } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(request: Request) {
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
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
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
      }
    });
    
  } catch (error) {
    console.error("Get current user error:", error);
    return NextResponse.json(
      { error: "Failed to get user data" },
      { status: 500 }
    );
  }
} 