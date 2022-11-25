"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TokensValidator {
    register() {
        return [
            (0, express_validator_1.check)('uuid').notEmpty(),
            (0, express_validator_1.check)('combinaison').notEmpty(),
            (0, express_validator_1.check)('website').notEmpty()
        ];
    }
    generate() {
        return [
            (0, express_validator_1.check)('website').notEmpty()
        ];
    }
}
exports.default = TokensValidator;
