import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'user' | 'business';
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  userType: 'user' | 'business';
  businessName?: string;
  businessAddress?: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', credentials.userType);
      }
      return response.data;
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.response?.data?.message || 'Login failed',
        errors: error.response?.data?.errors,
        status: error.response?.status
      };
      throw apiError;
    }
  },

  async signup(data: SignupData) {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', data.userType);
      }
      return response.data;
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.response?.data?.message || 'Signup failed',
        errors: error.response?.data?.errors,
        status: error.response?.status
      };
      throw apiError;
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  getUserType() {
    return localStorage.getItem('userType');
  }
};
