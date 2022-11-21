import express from "express";
import cors from "cors";
import helmet from "helmet";
import Routes from './interfaces/routes.interface';

class App {
    app: express.Application;
    port: number;
    env: string;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.env = process.env.ENV ?? 'dev';

        this.initializeMiddlewares();
        this.initializeControllers(routes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`typescript server started on port: ${this.port}`)
        });
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeControllers(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}

export default App;
