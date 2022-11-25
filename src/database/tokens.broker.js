"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_broker_1 = __importDefault(require("./base.broker"));
const pg_1 = require("@databases/pg");
class TokensBroker extends base_broker_1.default {
    insertNewToken(uuid, combinaison, website) {
        return new Promise((resolve, reject) => {
            this.getConnection()
                .then(connection => {
                connection.query((0, pg_1.sql) `INSERT INTO "tokens" (uuid, combinaison, website) VALUES (${uuid}, ${combinaison}, ${website})`)
                    .then(() => resolve())
                    .catch(() => reject("Internal error"));
            })
                .catch(error => {
                console.log(error);
                reject("Internal error");
            });
        });
    }
}
exports.default = TokensBroker;
