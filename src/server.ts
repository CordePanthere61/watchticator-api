import * as dotenv from 'dotenv';
import App from './app';
import TokensRoute from './routes/tokens.route';
import CombinaisonRoute from "./routes/combinaison.route";
import AcknowledgmentRoute from "./routes/acknowledgment.route";

dotenv.config();

const app = new App([new TokensRoute(), new CombinaisonRoute, new AcknowledgmentRoute()]);

app.listen();