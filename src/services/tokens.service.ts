import TokensBroker from "../database/tokens.broker";
import { possibleCombinaisons } from "../utils/utils";

export default class TokensService {
    private broker: TokensBroker;

    constructor () {
        this.broker = new TokensBroker();
    }

    public registerNewCombinaison(uuid: string, combinaison: string, website: string) {
        return new Promise<void|string>((resolve, reject) => {
            if (!this.isCombinaisonValid(combinaison)) {
                return reject('Invalid combinaison');
            }
            this.broker.insertNewToken(uuid, combinaison, website)
            .then(() => resolve())
            .catch(error => reject(error));
        });
    }

    private isCombinaisonValid(combinaisonRaw: string): boolean {
        let combinaisons = combinaisonRaw.split('|');
        return combinaisons.every(element => {
            return possibleCombinaisons.includes(element);
        }); 
        // combinaisons.forEach(element => {
        //     console.log(element);
        //     if (!possibleCombinaisons.includes(element)) return false;
        // });
        // return false;
    }
}