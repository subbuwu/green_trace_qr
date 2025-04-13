import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface DecodedToken {
  id: string;
  email: string;
  userType: string;
  iat: number;
  exp: number;
}

/**
 * Validate JWT token from request headers
 */
export async function validateToken(request: NextRequest): Promise<{ isValid: boolean; decoded?: DecodedToken; error?: string }> {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1] ;
    
    if (!token) {
      return { isValid: false, error: 'No token provided' };
    }
    
    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as DecodedToken;
      
      // Check if session exists
      const session = await prisma.session.findUnique({
        where: { token },
        include: {
          user: true
        }
      });
      
      if (!session) {
        return { isValid: false, error: 'Session not found' };
      }
      
      // Check if session is expired
      if (new Date() > session.expiresAt) {
        return { isValid: false, error: 'Session expired' };
      }
      
      return { isValid: true, decoded };
    } catch (error) {
      return { isValid: false, error: 'Invalid token' };
    }
  } catch (error) {
    console.error('Token validation error:', error);
    return { isValid: false, error: 'Failed to validate token' };
  }
}

/**
 * Get current user from request
 */
export async function getCurrentUser(request: NextRequest) {
  const { isValid, decoded, error } = await validateToken(request);
  
  if (!isValid || !decoded) {
    return { success: false, error };
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      return { success: false, error: 'User not found' };
    }
    
    return { success: true, user };
  } catch (error) {
    console.error('Get current user error:', error);
    return { success: false, error: 'Failed to get user data' };
  }
}