"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class CombinaisonValidator {
    register() {
        return [
            (0, express_validator_1.body)('uuid').notEmpty(),
            (0, express_validator_1.body)('mac').notEmpty(),
            (0, express_validator_1.body)('movements').notEmpty()
        ];
    }
    index() {
        return [
            (0, express_validator_1.body)('mac').notEmpty()
        ];
    }
}
exports.default = CombinaisonValidator;
