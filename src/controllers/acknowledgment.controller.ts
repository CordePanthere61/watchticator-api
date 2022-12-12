import { NextFunction, Request, Response } from 'express';
import AcknowledgmentService from '../services/acknowledgment.service';

export default class AcknowledgmentController {
    private service = new AcknowledgmentService();

    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            let acknowledgment = await this.service.create(req.body.website as string, req.body.user as string);
            return res.status(200).json({
                status: 200,
                acknowledgment: acknowledgment
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            })
        }
    }

    public async validate(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.validate(req.body.website as string, req.body.movements as string, req.body.mac as string);
            return res.status(200).json({
                status: 200,
                message: "Acknowledgment successful"
            })
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            });
        }
    }

    public async verify(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).json({
                status: 200,
                completed: await this.service.verify(req.body.acknowledgment as number)
            });
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            });
        }
    }
}