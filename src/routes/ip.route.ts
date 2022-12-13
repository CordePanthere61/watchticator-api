import { Router } from 'express';
import Routes from '../interfaces/routes.interface';
import { validate } from '../validators/base.validator';
import IpController from "../controllers/ip.controller";
import IpValidator from "../validators/ip.validator";

export default class IpRoute implements Routes {
    path: string;
    router: Router;
    controller: IpController;
    validator: IpValidator;

    constructor() {
        this.path = "/ip";
        this.router = Router();
        this.controller = new IpController();
        this.validator = new IpValidator();
        this.initializeRoutes()
    }

    private async initializeRoutes() {
        this.router.get(`${this.path}/update`, this.validator.update(), validate, this.controller.update.bind(this.controller));
        this.router.post(`${this.path}/last`, this.controller.last.bind(this.controller));
    }
}