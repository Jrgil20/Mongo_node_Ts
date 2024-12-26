import { Router } from 'express';
import { Express } from 'express-serve-static-core';
import { FraseController } from '../controllers/fraseController';

const router = Router();
const fraseController = new FraseController();

export const setFraseRoutes = (app: Express) => {
    app.use('/api', router);
    
    router.get('/frases', fraseController.getFrases.bind(fraseController));
    router.post('/frases', fraseController.createFrase.bind(fraseController));
    router.put('/frases/:id', fraseController.updateFrase.bind(fraseController));
    router.delete('/frases/:id', fraseController.deleteFrase.bind(fraseController));
};