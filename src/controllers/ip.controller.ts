import { NextFunction, Request, Response } from 'express';
import IpService from "../services/ip.service";

export default class IpController {
    private service = new IpService();

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            await this.service.updateAddress(req.query.address as string)
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

    public async last(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).json({
                status: 200,
                address: await this.service.findLast()
            });
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            })
        }
    }
}