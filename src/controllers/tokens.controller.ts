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
        // return res.status(200).send(`<img src="${await QRCode.toDataURL(crypto.randomUUID() + req.query.website)}"></img>`)
        return res.status(200).send(await (crypto.randomUUID() + '|' + req.query.website));
    }

    public register(req: Request, res: Response, next: NextFunction) {
        this.service.registerNewCombinaison(req.query.uuid as string, req.query.combinaison as string, req.query.website as string)
            .then(() => {
                return res.status(200).json({
                    uuid: req.query.uuid,
                    combinaison: req.query.combinaison,
                    website: req.query.website
                });
            })
            .catch((e: any) => {
                return res.status(500).json({
                    error: e
                });
            });
    }
}