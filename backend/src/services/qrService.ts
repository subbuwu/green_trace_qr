import QRCode from 'qrcode';
import crypto from 'crypto';
import prisma from '../lib/prisma';

interface QRPayload {
  entryId: string;
  userId: string;
  wasteType: string;
  quantity: number;
  timestamp: number;
}

class QRService {
  private readonly SECRET_KEY = process.env.QR_SECRET_KEY || 'your-secret-key';

  async generateQR(userId: string, wasteType: string, quantity: number): Promise<{ qrCodeImage: string, entryId: string }> {
    try {
      const entryId = crypto.randomUUID();
      
      const payload: QRPayload = {
        entryId,
        userId,
        wasteType,
        quantity,
        timestamp: Date.now()
      };

      const payloadString = Buffer.from(JSON.stringify(payload)).toString('base64');

      const qrCodeImage = await QRCode.toDataURL(payloadString);
      
      await prisma.recycleEntry.create({
        data: {
          id: entryId,
          userId,
          wasteType,
          quantity,
          qrCode: qrCodeImage,
          qrPayload: JSON.stringify(payload)
        }
      });
      const res = { qrCodeImage, entryId };

      return res;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw new Error('Failed to generate QR code');
    }
  }

  async verifyQR(jwtPayload: string, businessId: string): Promise<{ verified: boolean, entryDetails?: any }> {
    try {
      // first decode the payload from jwt
      const initialPayload = Buffer.from(jwtPayload, 'base64').toString('utf-8');

      const signedPayload = JSON.parse(initialPayload);
      console.log(signedPayload)
      
      if (!this.verifySignature(signedPayload)) {
        return { verified: false };
      }

      
      const entry = await prisma.recycleEntry.findUnique({
        where: { id: signedPayload.entryId }
      });

      if (!entry) {
        return { verified: false };
      }

      if (entry.status !== 'pending') {
        return { verified: false, entryDetails: { message: 'QR code already used' } };
      }
      
      const points = this.calculatePoints(signedPayload.wasteType, signedPayload.quantity);
      
      const updatedEntry = await prisma.recycleEntry.update({
        where: { id: signedPayload.entryId },
        data: {
          status: 'verified',
          points,
          verifiedAt: new Date(),
          verifiedByBusinessId: businessId
        }
      });
      
      return { 
        verified: true, 
        entryDetails: updatedEntry 
      };
    } catch (error) {
      console.error('Error verifying QR code:', error);
      return { verified: false };
    }
  }

  async getQRImage(entryId: string): Promise<Buffer> {
    const entry = await prisma.recycleEntry.findUnique({
      where: { id: entryId }
    });

    if (!entry) {
      throw new Error('QR code not found');
    }

    const base64Data = entry.qrCode.split(',')[1];
    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    return imageBuffer;
  }

  private calculatePoints(wasteType: string, quantity: number): number {
    const pointValues: {[key: string]: number} = {
      'plastic': 10,
      'paper': 5,
      'glass': 15,
      'metal': 20,
      'electronics': 50
    };
    
    const basePoints = pointValues[wasteType.toLowerCase()] || 5;
    return Math.round(basePoints * quantity);
  }

  private signPayload(payload: QRPayload): { data: QRPayload, signature: string } {
    const dataString = JSON.stringify(payload);
    const hmac = crypto.createHmac('sha256', this.SECRET_KEY);
    const signature = hmac.update(dataString).digest('hex');
    
    return {
      data: payload,
      signature
    };
  }

  private verifySignature(signedPayload: { data: QRPayload, signature: string }): boolean {
    const { data, signature } = signedPayload;
    const dataString = JSON.stringify(data);
    const hmac = crypto.createHmac('sha256', this.SECRET_KEY);
    const computedSignature = hmac.update(dataString).digest('hex');
    
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(computedSignature, 'hex')
    );
  }
}

export default new QRService();