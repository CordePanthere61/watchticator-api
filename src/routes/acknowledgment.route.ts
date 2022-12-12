import { Router } from 'express';
import Routes from '../interfaces/routes.interface';
import { validate } from '../validators/base.validator';
import AcknowledgmentController from "../controllers/acknowledgment.controller";
import AcknowledgmentValidator from "../validators/acknowledgment.validator";

export default class AcknowledgmentRoute implements Routes {
    path: string;
    router: Router;
    controller: AcknowledgmentController;
    validator: AcknowledgmentValidator;

    constructor() {
        this.path = "/acknowledgment";
        this.router = Router();
        this.controller = new AcknowledgmentController();
        this.validator = new AcknowledgmentValidator();
        this.initializeRoutes()
    }

    private async initializeRoutes() {
        this.router.post(`${this.path}/create`, this.validator.create(), validate, this.controller.create.bind(this.controller));
        this.router.post(`${this.path}/validate`, this.validator.validate(), validate, this.controller.validate.bind(this.controller));
        this.router.post(`${this.path}/verify`, this.validator.verify(), validate, this.controller.verify.bind(this.controller));
    }
}