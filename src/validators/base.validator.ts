import { validationResult} from 'express-validator';
import { Request, Response, NextFunction } from "express";

export function validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors: any[] = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}