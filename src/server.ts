import * as dotenv from 'dotenv';
import App from './app';
import TokensRoute from './routes/tokens.route';
import CombinaisonRoute from "./routes/combinaison.route";
import AcknowledgmentRoute from "./routes/acknowledgment.route";
import IpRoute from "./routes/ip.route";

dotenv.config();

const app = new App([new TokensRoute(), new CombinaisonRoute, new AcknowledgmentRoute(), new IpRoute()]);

app.listen();