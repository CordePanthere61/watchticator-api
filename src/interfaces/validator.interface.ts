import { Request, Response, NextFunction } from "express";

export default interface Validator {
    rules: () => any[],
    validate(req: Request, res: Response, next: NextFunction): any;
}