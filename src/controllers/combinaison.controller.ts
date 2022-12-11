import { NextFunction, Request, Response } from 'express';
import CombinaisonService from '../services/combinaison.service';

export default class CombinaisonController {
    private service: CombinaisonService;

    constructor() {
        this.service = new CombinaisonService();
    }

    public async index(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).json({
                status: 200,
                websites: await this.service.getWebsitesWithMac(req.body.mac as string)
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            })
        }
    }

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.registerNewCombinaison(req.body.uuid, req.body.mac, req.body.movements);
            return res.status(200).json({
                status: 200,
                message: "Success"
            });
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            });
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.removeCombinaison(req.body.id as number);
            return res.status(200).json({
                status: 200,
                message: "Success"
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            })
        }
    }
}