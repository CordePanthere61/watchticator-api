import { check, body } from 'express-validator';

export default class TokensValidator {
    register() {
        return [
            body('uuid').notEmpty(),
            body('combinaison').notEmpty(),
            body('website').notEmpty()
        ]
    }

    generate() {
        return [
            check('website').notEmpty()
        ]
    }
}