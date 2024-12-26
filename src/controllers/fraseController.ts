import { Request, Response } from 'express';
import Frase from '../models/Frase';

export class FraseController {
    public async getFrases(_: Request, res: Response): Promise<void> {
        try {
            const frases = await Frase.find();
            res.json(frases);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    public async createFrase(req: Request, res: Response): Promise<void> {
        const nuevaFrase = new Frase(req.body);
        try {
            const fraseGuardada = await nuevaFrase.save();
            res.status(201).json(fraseGuardada);
        } catch (error) {
            res.status(400).json({ message: (error as any).message });
        }
    }

    public async updateFrase(req: Request, res: Response): Promise<void> {
        try {
            const fraseActualizada = await Frase.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!fraseActualizada) {
                res.status(404).json({ message: 'Frase no encontrada' });
                return;
            }
            res.json(fraseActualizada);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    public async deleteFrase(req: Request, res: Response): Promise<void> {
        try {
            const fraseEliminada = await Frase.findByIdAndDelete(req.params.id);
            if (!fraseEliminada) {
                res.status(404).json({ message: 'Frase no encontrada' });
                return;
            }
            res.json({ message: 'Frase eliminada' });
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}