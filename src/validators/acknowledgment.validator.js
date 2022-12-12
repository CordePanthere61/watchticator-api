"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class AcknowledgmentValidator {
    create() {
        return [
            (0, express_validator_1.body)('website').notEmpty(),
            (0, express_validator_1.body)('user').notEmpty()
        ];
    }
    validate() {
        return [
            (0, express_validator_1.body)('website').notEmpty(),
            (0, express_validator_1.body)('movements').notEmpty(),
            (0, express_validator_1.body)('mac').notEmpty()
        ];
    }
    verify() {
        return [
            (0, express_validator_1.body)('acknowledgment').notEmpty().isInt()
        ];
    }
}
exports.default = AcknowledgmentValidator;
