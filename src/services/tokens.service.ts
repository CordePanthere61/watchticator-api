import TokensBroker from "../database/tokens.broker";

export default class TokensService {
    private broker: TokensBroker;

    constructor () {
        this.broker = new TokensBroker();
    }

    public async generateNewToken(uuid: string, website: string) {
        try {
            await this.broker.insert(uuid, website);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}