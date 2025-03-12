import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface GenerateQRRequest {
  userId: string;
  wasteType: string;
  quantity: number;
}

export interface GenerateQRResponse {
  entryId: string;
    qrCodeImage: string;
}

export interface VerifyQRRequest {
  qrPayload: string;
  businessId: string;
}

export interface VerifyQRResponse {
  success: boolean;
  message: string;
  data: {
    entryId: string;
    userId: string;
    wasteType: string;
    quantity: number;
    timestamp: string;
    verified: boolean;
    points?: number;
  };
}

export const qrService = {
  generateQR: async (data: GenerateQRRequest): Promise<GenerateQRResponse> => {
    try {
      const response = await api.post('/qr/generate', data);
      return response.data;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw error;
    }
  },
  
  verifyQR: async (data: VerifyQRRequest): Promise<VerifyQRResponse> => {
    try {
      const response = await api.post('/qr/verify', data);
      return response.data;
    } catch (error) {
      console.error('Error verifying QR code:', error);
      throw error;
    }
  },
  
  getQRImageUrl: (entryId: string): string => {
    return `${API_BASE_URL}/qr/image/${entryId}`;
  }
};