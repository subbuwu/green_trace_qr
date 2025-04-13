
interface QRCodePayload {
    wasteType: string;
    quantity: number;
    unit: string;
    description?: string;
    photos?: string[];
  }
  
  interface QRCodeData {
    id: string;
    wasteType: string;
    quantity: number;
    unit: string;
    qrCodeUrl: string;
    createdAt: string;
    description?: string;
    isVerified: boolean;
    verifiedAt?: string;
  }
  
  interface QRCodeResponse {
    success: boolean;
    qrCode: QRCodeData;
  }
  
  interface QRCodeListResponse {
    success: boolean;
    qrCodes: QRCodeData[];
  }
  
  // QR Code Service for interacting with the API
  class QRCodeService {
    /**
     * Generate a new QR code
     */
    async generateQRCode(data: QRCodePayload): Promise<QRCodeResponse> {
      try {
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Not authenticated');
        }
        
        const response = await fetch('/api/qrcode/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to generate QR code');
        }
        
        return await response.json();
      } catch (error) {
        console.error('QR code generation error:', error);
        throw error;
      }
    }
    
    /**
     * Get all QR codes for the current user
     */
    async getQRCodes(): Promise<QRCodeListResponse> {
      try {
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Not authenticated');
        }
        
        const response = await fetch('/api/qrcode/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch QR codes');
        }
        
        return await response.json();
      } catch (error) {
        console.error('Error fetching QR codes:', error);
        throw error;
      }
    }
    
    /**
     * Get a specific QR code by ID
     */
    async getQRCode(id: string): Promise<QRCodeResponse> {
      try {
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Not authenticated');
        }
        
        const response = await fetch(`/api/qrcode/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch QR code');
        }
        
        return await response.json();
      } catch (error) {
        console.error('Error fetching QR code:', error);
        throw error;
      }
    }
  }
  
  export const qrCodeService = new QRCodeService();