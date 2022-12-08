import { body } from 'express-validator';

export default class CombinaisonValidator {
    register() {
        return [
            body('uuid').notEmpty(),
            body('mac').notEmpty(),
            body('movements').notEmpty()
        ]
    }
}