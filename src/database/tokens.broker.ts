import BaseBroker from './base.broker';
import { sql } from '@databases/pg';

export default class TokensBroker extends BaseBroker{

    public insertNewToken(uuid: string, combinaison: string, website: string) {
        return new Promise<void|string>((resolve, reject) => {
            this.getConnection()
                .then(connection => {
                    connection.query(sql`INSERT INTO "tokens" (uuid, combinaison, website) VALUES (${uuid}, ${combinaison}, ${website})`)
                        .then(() => resolve())
                        .catch(() => reject("Internal error"));
                })
                .catch(error => {
                    console.log(error);
                    reject("Internal error");
                })
        });
    }
}
