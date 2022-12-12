import {body} from 'express-validator';

export default class AcknowledgmentValidator {
    create() {
        return [
            body('website').notEmpty(),
            body('user').notEmpty()
        ]
    }
    validate() {
        return [
            body('website').notEmpty(),
            body('movements').notEmpty(),
            body('mac').notEmpty()
        ]
    }
    verify() {
        return [
            body('acknowledgment').notEmpty().isInt()
        ]
    }
}