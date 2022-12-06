import { Router } from 'express';
import Routes from '../interfaces/routes.interface';
import { validate } from '../validators/base.validator';
import CombinaisonController from "../controllers/combinaison.controller";
import CombinaisonValidator from "../validators/combinaison.validator";

export default class CombinaisonRoute implements Routes {
    path: string;
    router: Router;
    controller: CombinaisonController;
    validator: CombinaisonValidator;

    constructor() {
        this.path = "/combinaison";
        this.router = Router();
        this.controller = new CombinaisonController();
        this.validator = new CombinaisonValidator();
        this.initializeRoutes()
    }

    private async initializeRoutes() {
        this.router.post(`${this.path}/register`, this.validator.register(), validate, this.controller.register.bind(this.controller))
    }
}