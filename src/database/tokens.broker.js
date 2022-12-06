"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_broker_1 = __importDefault(require("./base.broker"));
const pg_1 = require("@databases/pg");
class TokensBroker extends base_broker_1.default {
    find(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                let res = yield connection.query((0, pg_1.sql) `SELECT * from "token" where uuid = ${uuid}`);
                if (!res.length) {
                    throw "Invalid UUID";
                }
                else {
                    return res.at(0);
                }
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    remove(token) {
        this.getConnection()
            .then(connection => {
            connection.query((0, pg_1.sql) `DELETE FROM "token" WHERE id = ${token.id}`);
        });
    }
    insert(uuid, website) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                let date = new Date(Date.now()).toISOString();
                yield connection.query((0, pg_1.sql) `INSERT INTO "token" (uuid, website, time) VALUES (${uuid}, ${website}, ${date})`);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
}
exports.default = TokensBroker;
