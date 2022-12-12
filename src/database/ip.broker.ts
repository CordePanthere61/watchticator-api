import BaseBroker from './base.broker';
import {sql} from '@databases/pg';

export default class IpBroker extends BaseBroker {

    public async update(address: string) {
        try {
            let connection = await this.getConnection();
            await connection.query(sql`INSERT INTO "mathieu" (last_ip_address) VALUES (${address})`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
