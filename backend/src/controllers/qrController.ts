import QRCode from 'qrcode';
import crypto from 'crypto';
import { prisma } from '../lib/prisma';

class QRService {
  private readonly SECRET_KEY = process.env.QR_SECRET_KEY || 'your-secret-key';
  
  async generateQR(userId: string, wasteType: string, quantity: number) {
    try {
      const timestamp = Date.now();
      const payload = {
        userId,
        wasteType,
        quantity,
        timestamp,
      };
      
      const signature = this.generateSignature(payload);
      
      const signedPayload = {
        ...payload,
        signature
      };
      
      const payloadString = JSON.stringify(signedPayload);
      const qrCodeImage = await QRCode.toDataURL(payloadString);
      
      const entry = await prisma.recycleEntry.create({
        data: {
          userId,
          wasteType,
          quantity,
          status: 'PENDING',
          qrCode: qrCodeImage,
          qrPayload: JSON.stringify(signedPayload)
        }
      });
      
      return {
        qrCodeImage,
        entryId: entry.id,
        timestamp
      };
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw new Error('Failed to generate QR code');
    }
  }
  
  private generateSignature(payload: any): string {
    const data = JSON.stringify(payload);
    return crypto
      .createHmac('sha256', this.SECRET_KEY)
      .update(data)
      .digest('hex');
  }
  
  async verifyQR(qrPayload: string, businessId: string) {
    try {
      const payload = JSON.parse(qrPayload);
      const { signature, ...dataToVerify } = payload;
      
      const calculatedSignature = this.generateSignature(dataToVerify);
      const isSignatureValid = calculatedSignature === signature;
      
      if (!isSignatureValid) {
        return {
          verified: false,
          entryDetails: null
        };
      }
      
      const existingEntry = await prisma.recycleEntry.findFirst({
        where: {
          userId: payload.userId,
          wasteType: payload.wasteType,
          quantity: payload.quantity,
          status: 'PENDING',
        }
      });
      
      if (!existingEntry) {
        return {
          verified: false,
          entryDetails: null,
          message: 'Entry not found'
        };
      }
      
      if (existingEntry.status === 'VERIFIED') {
        return {
          verified: false,
          entryDetails: existingEntry,
          message: 'QR code already used'
        };
      }
      
      const updatedEntry = await prisma.recycleEntry.update({
        where: { id: existingEntry.id },
        data: {
          status: 'VERIFIED',
          verifiedAt: new Date(),
        }
      });
      
      return {
        verified: true,
        entryDetails: {
          id: updatedEntry.id,
          userId: updatedEntry.userId,
          wasteType: updatedEntry.wasteType,
          quantity: updatedEntry.quantity,
        }
      };
    } catch (error) {
      console.error('Error verifying QR code:', error);
      throw new Error('Failed to verify QR code');
    }
  }
  
  async getQRImage(entryId: string) {
    try {
      const entry = await prisma.recycleEntry.findUnique({
        where: { id: entryId }
      });
      
      if (!entry) {
        throw new Error('Entry not found');
      }
      
      const payload = {
        userId: entry.userId,
        wasteType: entry.wasteType,
        quantity: entry.quantity,
      };
      
      const signature = this.generateSignature(payload);
      
      const signedPayload = {
        ...payload,
        signature
      };
      
      const qrBuffer = await QRCode.toBuffer(JSON.stringify(signedPayload));
      
      return qrBuffer;
    } catch (error) {
      console.error('Error generating QR image:', error);
      throw new Error('Failed to generate QR image');
    }
  }
  
  async getUserEntries(userId: string) {
    try {
      const entries = await prisma.recycleEntry.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
      });
      
      return entries;
    } catch (error) {
      console.error('Error fetching user entries:', error);
      throw new Error('Failed to fetch user entries');
    }
  }
  
  async getEntryDetails(entryId: string) {
    try {
      const entry = await prisma.recycleEntry.findUnique({
        where: { id: entryId }
      });
      
      if (!entry) {
        throw new Error('Entry not found');
      }
      
      return entry;
    } catch (error) {
      console.error('Error fetching entry details:', error);
      throw new Error('Failed to fetch entry details');
    }
  }
  
  async getBusinessVerifications(businessId: string) {
    try {
      const verifications = await prisma.recycleEntry.findMany({
        where: { 
          status: 'VERIFIED'
        },
        orderBy: { verifiedAt: 'desc' }
      });
      
      return verifications;
    } catch (error) {
      console.error('Error fetching business verifications:', error);
      throw new Error('Failed to fetch business verifications');
    }
  }
}

export default new QRService();