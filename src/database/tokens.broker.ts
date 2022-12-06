import BaseBroker from './base.broker';
import {sql} from '@databases/pg';
import Token from "../interfaces/token.interface";

export default class TokensBroker extends BaseBroker {

    public async find(uuid: string): Promise<Token> {
        try {
            let connection = await this.getConnection();
            let res = await connection.query(sql`SELECT * from "token" where uuid = ${uuid}`);
            if (!res.length) {
                throw "Invalid UUID";
            } else {
                return res.at(0);
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public remove(token: Token) {
        this.getConnection()
            .then(connection => {
                connection.query(sql`DELETE FROM "token" WHERE id = ${token.id}`)
            });
    }

    public async insert(uuid: string, website: string) {
        try {
            let connection = await this.getConnection();
            let date = new Date(Date.now()).toISOString()
            await connection.query(sql`INSERT INTO "token" (uuid, website, time) VALUES (${uuid}, ${website}, ${date})`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
