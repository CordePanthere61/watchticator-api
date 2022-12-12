import BaseBroker from './base.broker';
import {Acknowledgment, Combinaison, Token} from "../interfaces/dbo.interface";
import {sql} from "@databases/pg";

export default class AcknowledgmentBroker extends BaseBroker {

    public async insert(combinaison: Combinaison): Promise<Acknowledgment> {
        try {
            let connection = await this.getConnection();
            let date = new Date(Date.now()).toISOString()
            let acknowledgmentId = await connection.query(sql`INSERT INTO "acknowledgment" (id_combinaison, "time") VALUES (${combinaison.id}, ${date}) RETURNING ID`);
            return {
                id: acknowledgmentId.at(0).id,
                id_combinaison: combinaison.id,
                completed: false,
                time: date
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async findByCombinaisonId(id: number): Promise<Acknowledgment> {
        try {
            let connection = await this.getConnection();
            let res = await connection.query(sql`SELECT * FROM "acknowledgment" WHERE id_combinaison = ${id} AND completed = false`);
            if (!res.length) {
                throw "No acknowledgment pending with this combinaison";
            }
            return {
                id: res.at(0).id,
                id_combinaison: res.at(0).id_combinaison,
                time: res.at(0).time,
                completed: res.at(0).completed
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async completeAcknowledgment(id: number) {
        try {
            let connection = await this.getConnection();
            await connection.query(sql`UPDATE "acknowledgment" SET completed = true WHERE id = ${id}`);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async findById(id: number): Promise<Acknowledgment> {
        try {
            let connection = await this.getConnection();
            console.log("IDDDDDDDDDDDD : " + id)
            let res = await connection.query(sql`SELECT * FROM "acknowledgment" WHERE id = ${id}`);
            if (!res.length) {
                throw "Invalid acknowledgment id";
            }
            return {
                id: res.at(0).id,
                id_combinaison: res.at(0).id_combinaison,
                time: res.at(0).time,
                completed: res.at(0).completed,
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
