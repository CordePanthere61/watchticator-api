import BaseBroker from './base.broker';
import {sql} from '@databases/pg';

export default class CombinaisonBroker extends BaseBroker {

    public async insert(website: string, mac:string, user: string, movements: string) {
        try {
            let connection = await this.getConnection();
            await connection.query(sql`INSERT INTO "combinaison" (website, mac, "user", movements) VALUES (${website}, ${mac}, ${user}, ${movements})`)
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async findAllByMac(mac: string) {
        try {
            let connection = await this.getConnection();
            let res = await connection.query(sql`SELECT * FROM "combinaison" WHERE mac = ${mac}`);
            if (!res.length) {
                throw "Invalid mac";
            }
            return res.map((elem) => {
                return {
                    "id": elem.id,
                    "name": elem.website
                }
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async removeById(id: number) {
        try {
            let connection = await this.getConnection();
            await connection.query(sql`DELETE FROM "combinaison" WHERE id = ${id}`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
