import BaseBroker from './base.broker';
import {sql} from '@databases/pg';

export default class CombinaisonBroker extends BaseBroker {

    public async insert(website: string, mac:string, movements: string) {
        try {
            let connection = await this.getConnection();
            await connection.query(sql`INSERT INTO "combinaison" (website, mac, movements) VALUES (${website}, ${mac}, ${movements})`)
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}