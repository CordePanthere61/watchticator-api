import { NextFunction, Request, Response } from 'express';
import QRCode from 'qrcode';
import crypto from 'crypto';
import TokensService from '../services/tokens.service';

export default class TokensController {
    private service: TokensService;

    constructor() {
        this.service = new TokensService();
    }

    public async generate( req: Request, res: Response, next: NextFunction) {
        return res.status(200).send(`<img src="${await QRCode.toDataURL(crypto.randomUUID() + '|' + req.query.website)}"></img>`)
        // return res.status(200).send(crypto.randomUUID() + '|' + req.query.website);
    }

    public register(req: Request, res: Response, next: NextFunction) {
        this.service.registerNewCombinaison(req.body.uuid as string, req.body.combinaison as string, req.body.website as string)
            .then(() => {
                return res.status(200).json({
                    uuid: req.body.uuid,
                    combinaison: req.body.combinaison,
                    website: req.body.website
                });
            })
            .catch((e: any) => {
                return res.status(500).json({
                    error: e
                });
            });
    }
}