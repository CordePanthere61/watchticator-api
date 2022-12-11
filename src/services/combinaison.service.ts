import { possibleCombinaisons } from "../utils/utils";
import CombinaisonBroker from "../database/combinaison.broker";
import TokensBroker from "../database/tokens.broker";

export default class TokensService {
    private broker: CombinaisonBroker;
    private tokenBroker: TokensBroker;

    constructor () {
        this.broker = new CombinaisonBroker();
        this.tokenBroker = new TokensBroker();
    }

    public async registerNewCombinaison(uuid: string, mac: string, movements: string) {
        try {
            this.areMovementsValid(movements);
            let token = await this.tokenBroker.find(uuid);
            await this.broker.insert(token.website, mac, token.user, movements);
            this.tokenBroker.remove(token);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async getWebsitesWithMac(mac: string) {
        try {
            return this.broker.findAllByMac(mac);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async removeCombinaison(id: number) {
        try {
            await this.broker.removeById(id);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    private areMovementsValid(movementsRaw: string) {
        let movements = movementsRaw.split('|');
        movements.every(element => {
            if (!possibleCombinaisons.includes(element)) {
                throw "Combinaison invalid";
            }
        });
    }
}