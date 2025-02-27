import { Router } from 'express';
import qrController from '../controllers/qrController';

const router = Router();

router.post('/generate', qrController.generateQR);

router.post('/verify', qrController.verifyQR);

router.get('/image/:entryId', qrController.getQRImage);

export default router;