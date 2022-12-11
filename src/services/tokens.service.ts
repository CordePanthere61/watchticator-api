import TokensBroker from "../database/tokens.broker";

export default class TokensService {
    private broker: TokensBroker;

    constructor () {
        this.broker = new TokensBroker();
    }

    public async generateNewToken(uuid: string, website: string, user: string): Promise<string> {
        try {
            await this.broker.insert(uuid, website, user);
            return uuid;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}