import { check } from 'express-validator';

export default class TokensValidator {
    generate() {
        return [
            check('website').notEmpty()
        ]
    }
}