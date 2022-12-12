import { check } from 'express-validator';

export default class IpValidator {
    update() {
        return [
            check('address').notEmpty()
        ]
    }
}