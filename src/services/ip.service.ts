import IpBroker from "../database/ip.broker";

export default class IpService {
    private broker = new IpBroker();

    public async updateAddress(address: string) {
        try {
            await this.broker.update(address);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    public async findLast(): Promise<string> {
        try {
            return await this.broker.findLast();
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}