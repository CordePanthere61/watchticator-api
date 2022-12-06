import { NextFunction, Request, Response } from 'express';
import CombinaisonService from '../services/combinaison.service';

export default class CombinaisonController {
    private service: CombinaisonService;

    constructor() {
        this.service = new CombinaisonService();
    }

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.registerNewCombinaison(req.body.uuid, req.body.mac, req.body.movements);
            return res.status(200).json({
                message: "Success"
            });
        } catch (e) {
            res.status(500).json({
                message: e
            });
        }
    }
}