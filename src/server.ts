import * as dotenv from 'dotenv';
import App from './app';
import TokensRoute from './routes/tokens.route';

dotenv.config();

const app = new App([new TokensRoute()]);

app.listen();