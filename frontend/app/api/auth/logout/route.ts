import { NextResponse } from 'next/server';
import { ApiError } from '@/services/apiError';

export async function POST(request: Request) {
  try {
    // Get the token from the request body
    const { token } = await request.json();

    if (!token) {
      throw new ApiError('Token is required', 400);
    }

    // Here you would typically:
    // 1. Verify the token
    // 2. Invalidate the token in your database/blacklist
    // 3. Clear any session data

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Successfully logged out' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
} 