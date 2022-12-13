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

    public async findLast(): Promise<string> {
        try {
            let connection = await this.getConnection();
            let res = await connection.query(sql`SELECT * FROM "mathieu" ORDER BY id DESC`);
            if (!res.length) {
                throw "Internal error";
            }
            return res.at(0).last_ip_address as string
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
