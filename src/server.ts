import * as dotenv from 'dotenv';
import App from './app';
import TokensRoute from './routes/tokens.route';
import path from "path";

dotenv.config();

const app = new App([new TokensRoute()]);

console.log(path.resolve(__dirname) + '/dist')
app.listen();