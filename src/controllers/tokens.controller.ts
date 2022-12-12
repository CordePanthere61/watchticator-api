import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import TokensService from '../services/tokens.service';
import QRCode from 'qrcode';

export default class TokensController {
    private service: TokensService;

    constructor() {
        this.service = new TokensService();
    }

    public async generate( req: Request, res: Response, next: NextFunction) {
        try {
            let uuid = await this.service.generateNewToken(crypto.randomUUID(), req.query.website as string, req.query.user as string);
            return res.status(200).send(`${await QRCode.toDataURL(uuid)}`);
            // return res.status(200).json({
            //     status: 200,
            //     message: "Success"
            // });
        } catch (e) {
            return res.status(500).json({
                status: 500,
                message: e
            });
        }
    }
}