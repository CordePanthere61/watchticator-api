import TokensBroker from "../database/tokens.broker";

export default class TokensService {
    private broker: TokensBroker;

    constructor () {
        this.broker = new TokensBroker();
    }

    public async generateNewToken(uuid: string, website: string): Promise<string> {
        try {
            await this.broker.insert(uuid, website);
            return uuid;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}