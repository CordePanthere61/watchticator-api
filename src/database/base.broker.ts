import createConnectionPool, { ConnectionPool, sql } from '@databases/pg';

export default abstract class BaseBroker {

    protected getConnection(): Promise<ConnectionPool> {
        return new Promise((resolve, reject) => {
            const db = createConnectionPool(process.env.DB_CONNECTION_STRING);
            db.query(sql`set search_path to "watchticator";`)
                .then(() => {
                    resolve(db);
                })
                .catch(() => {
                    reject("Connection to DB failed...");
                });
        });
    }
}