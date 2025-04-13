import { PrismaClient, UserType } from '@prisma/client';

import { z } from 'zod';
import { ApiError } from './apiError';
``
const prisma = new PrismaClient();

const userSignupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  userType: z.enum(['user', 'business']), // Using lowercase as per your frontend
  phone: z.string().optional(),
  location: z.string().optional(),
  receiveUpdates: z.boolean().optional(),
  // Business specific fields
  businessName: z.string().optional(),
  businessAddress: z.string().optional(),
  businessType: z.string().optional()
});

// Schema validation for user login
const userLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  userType: z.enum(['user', 'business']), // Using lowercase as per your frontend
  rememberMe: z.boolean().optional()
});

// Map frontend userType to database enum
const mapUserType = (type: 'user' | 'business'): UserType => {
  return type === 'user' ? UserType.CONSUMER : UserType.BUSINESS;
};

class AuthService {
  /**
   * User Signup
   */
  async signup(data: any) {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new ApiError(result.error, response.status, result.errors);
      }

      // Store token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', result.token);
        localStorage.setItem('userType', data.userType);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to create account", 500);
    }
  }

  /**
   * User Login
   */
  async login(data: any) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new ApiError(result.error, response.status, result.errors);
      }

      // Store token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', result.token);
        localStorage.setItem('userType', data.userType);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to login", 500);
    }
  }

  /**
   * User Logout
   */
  async logout() {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      if (token) {
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new ApiError("Failed to logout", response.status);
        }

        // Remove token from localStorage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('userType');
        }
      }

      return { success: true };
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to logout", 500);
    }
  }

  /**
   * Get Current User
   */
  async getCurrentUser() {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      if (!token) {
        throw new ApiError("Not authenticated", 401);
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        // If token is invalid or expired, remove it
        if (response.status === 401 && typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('userType');
        }
        throw new ApiError(result.error, response.status);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to get user data", 500);
    }
  }

  /**
   * Request Password Reset
   */
  async requestPasswordReset(email: string) {
    try {
      const response = await fetch('/api/auth/reset-password/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new ApiError(result.error, response.status, result.errors);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to process password reset request", 500);
    }
  }

  /**
   * Reset Password
   */
  async resetPassword(token: string, password: string) {
    try {
      const response = await fetch('/api/auth/reset-password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new ApiError(result.error, response.status, result.errors);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to reset password", 500);
    }
  }

  /**
   * Change Password
   */
  async changePassword(currentPassword: string, newPassword: string) {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      if (!token) {
        throw new ApiError("Not authenticated", 401);
      }

      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new ApiError(result.error, response.status, result.errors);
      }

      return result;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError("Failed to change password", 500);
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    // Check if token exists in localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return !!token;
  }

  /**
   * Get user type
   */
  getUserType() {
    // Get user type from localStorage
    return typeof window !== 'undefined' ? localStorage.getItem('userType') : null;
  }
}

export const authService = new AuthService();