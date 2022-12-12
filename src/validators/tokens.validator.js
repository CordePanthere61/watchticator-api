"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TokensValidator {
    generate() {
        return [
            (0, express_validator_1.check)('website').notEmpty(),
            (0, express_validator_1.check)('user').notEmpty()
        ];
    }
}
exports.default = TokensValidator;
