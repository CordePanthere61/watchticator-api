import { NextFunction, Request, Response } from 'express';
import IpService from "../services/ip.service";

export default class IpController {
    private service = new IpService();

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.updateAddress(req.query.address as string)
            return res.status(200);
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            });
        }
    }
}