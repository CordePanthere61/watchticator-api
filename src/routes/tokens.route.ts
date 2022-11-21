import { Router } from 'express';
import TokensController from '../controllers/tokens.controller';
import Routes from '../interfaces/routes.interface';
import TokensValidator from '../validators/tokens.validator';
import { validate } from '../validators/base.validator';

export default class TokensRoute implements Routes {
    path: string;
    router: Router;
    controller: TokensController;
    validator: TokensValidator;

    constructor() {
        this.path = "/tokens";
        this.router = Router();
        this.controller = new TokensController();
        this.validator = new TokensValidator();
        this.initializeRoutes()
    }

    private async initializeRoutes() {
        this.router.get(`${this.path}/generate`, this.validator.generate(), validate, this.controller.generate.bind(this.controller));
        this.router.get(`${this.path}/register`, this.validator.register(), validate, this.controller.register.bind(this.controller))
    }
}