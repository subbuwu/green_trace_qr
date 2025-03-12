import { Router } from 'express';
import qrService from '../services/qrService';


const router = Router();

router.post('/generate', async (req,res) => {
    const { userId, wasteType, quantity } = req.body;
    
    if (!userId || !wasteType || !quantity) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }
    const result = await qrService.generateQR(userId, wasteType, Number(quantity));
    console.log(result)
    res.status(201).send(result);
});

router.post('/verify', (req, res) => {
    const { jwtPayload, businessId } = req.body;
    const result = qrService.verifyQR(jwtPayload, businessId);
    res.status(200).send(result);
})

router.get('/image/:entryId', async (req, res) => { 
    const entryId = req.params.entryId;
    const qrCodeImage = await qrService.getQRImage(entryId);
    res.set('Content-Type', 'image/png');
    res.set('Content-Disposition', `inline; filename="qr-${entryId}.png"`);
    res.send(qrCodeImage);
});

export default router;