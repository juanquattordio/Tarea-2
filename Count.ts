import Client from "./Client"
import Types from "./Types"

class Count {
    protected typeCount: Types;
    protected cost: number;
    protected duration: number;
    protected startDate: Date;
    protected endDate: Date = new Date();
    protected includesAds: boolean;
    protected client: Client;

    constructor(typeCount: Types, cost: number, duration: number, includesAds: boolean, client: Client) {
        this.typeCount = typeCount;
        this.cost = cost;
        this.duration = duration;
        this.includesAds = includesAds;
        this.client = client;
        this.startDate = new Date(Date.now());
        this.endDate.setDate(this.startDate.getDate() + duration)
    }
    public getTypeCount() {
        return Types[this.typeCount];
    }
    public getCost() {
        return this.cost;
    }
    public getDuration() {
        return this.duration;
    }
    public getIncludesAds() {
        if (this.includesAds) {
            return "Includes ads"
        } else { return "No includes ads" }
    }
    public getClient() {
        return this.client
    }
    public getStartDate() {
        return this.startDate;
    }
    public getEndtDate() {
        return this.endDate;
    }
}

export default Count