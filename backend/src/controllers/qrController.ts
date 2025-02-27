import { Request, Response } from 'express';
import qrService from '../services/qrService';

class QRController {
  async generateQR(req: Request, res: Response): Promise<void> {
    try {
      const { userId, wasteType, quantity } = req.body;
      
      if (!userId || !wasteType || !quantity) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
      }
      
      const result = await qrService.generateQR(userId, wasteType, Number(quantity));
      
      res.status(201).json({
        success: true,
        message: 'QR code generated successfully',
        data: result
      });
    } catch (error) {
      console.error('Error in generateQR controller:', error);
      res.status(500).json({ message: 'Failed to generate QR code' });
    }
  }

  async verifyQR(req: Request, res: Response): Promise<void> {
    try {
      const { qrPayload, businessId } = req.body;
      
      if (!qrPayload || !businessId) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
      }
      
      const result = await qrService.verifyQR(qrPayload, businessId);
      
      if (!result.verified) {
        res.status(400).json({
          success: false,
          message: 'Invalid or already used QR code',
          data: result.entryDetails
        });
        return;
      }
      
      res.status(200).json({
        success: true,
        message: 'QR code verified successfully',
        data: result.entryDetails
      });
    } catch (error) {
      console.error('Error in verifyQR controller:', error);
      res.status(500).json({ message: 'Failed to verify QR code' });
    }
  }

  async getQRImage(req: Request, res: Response): Promise<void> {
    try {
      const { entryId } = req.params;
      
      if (!entryId) {
        res.status(400).send('Entry ID is required');
        return;
      }
      
      const imageBuffer = await qrService.getQRImage(entryId);

      res.set('Content-Type', 'image/png');
      res.set('Content-Disposition', `inline; filename="qr-${entryId}.png"`);
      
      res.send(imageBuffer);
    } catch (error) {
      console.error('Error serving QR image:', error);
      res.status(500).send('Failed to retrieve QR code');
    }
  }
  
}

export default new QRController();