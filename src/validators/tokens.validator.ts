import { check } from 'express-validator';

export default class TokensValidator {
    register() {
        return [
            check('uuid').notEmpty(),
            check('combinaison').notEmpty(),
            check('website').notEmpty()
        ]
    }

    generate() {
        return [
            check('website').notEmpty()
        ]
    }
}