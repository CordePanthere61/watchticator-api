import AcknowledgmentBroker from "../database/acknowledgment.broker";
import CombinaisonBroker from "../database/combinaison.broker";

export default class AcknowledgmentService {
    private broker = new AcknowledgmentBroker();
    private combinaisonBroker = new CombinaisonBroker();

    public async create(website: string, user: string) {
        try {
            let combinaison = await this.combinaisonBroker.findByWebsiteAndUserId(website, user);
            return await this.broker.insert(combinaison);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async validate(website: string, movements: string, mac: string) {
        try {
            let combinaison = await this.combinaisonBroker.findByWebsiteAndMac(website, mac);
            if (combinaison.movements !== movements) {
                throw "Invalid combinaison.";
            }
            let acknowledgment = await this.broker.findByCombinaisonId(combinaison.id);
            await this.broker.completeAcknowledgment(acknowledgment.id);
            await this.broker.removeAcknowledgmentsForCombinaisonId(combinaison.id);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async verify(id: number): Promise<boolean> {
        try {
            let res = await this.broker.findById(id);
            return res.completed;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}