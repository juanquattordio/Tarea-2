import Basic from "./Basic";
import Count from "./Count";
import Free from "./Free";
import Types from "./Types";
import Premiun from "./Premiun";

class Client {
    private name: String;
    private surname: String;
    private DNI: String;
    private age: number;
    private email: String;
    private count: Count;

    constructor() {
        this.count = new Free(this);
    }
    public getName() {
        return this.name;
    }
    public setName(name: String) {
        this.name = name;
        return this;
    }
    public getSurname() {
        return this.surname;
    }
    public setSurname(surname: String) {
        this.surname = surname;
        return this;
    }
    public setDNI(DNI: String) {
        this.DNI = DNI;
        return this;
    }
    public getDNI() {
        return this.DNI;
    }
    public getAge() {
        return this.age;
    }
    public setSAge(age: number) {
        this.age = age;
        return this;
    }
    public getEmail() {
        return this.email;
    }
    public setEmail(email: String) {
        this.email = email;
        return this;
    }
    public getCount() {
        return this.count;
    }
    public setCount(typeCount: Types) {
        switch (typeCount) {
            case 0:
                this.count = new Free(this);
                break;
            case 1:
                this.count = new Basic(this);
                break;
            case 2:
                this.count = new Premiun(this);
                break;
        }
    }

    public getInfoClient() {
        return console.log('\nName: ' + this.getName() + '\n'
            + 'Surname: ' + this.getSurname() + '\n'
            + 'Mail: ' + this.getEmail() + '\n'
            + 'Info Count:\n'
            + ' - Type of count: ' + this.getCount().getTypeCount() + '\n'
            + ' - Cost: U$S ' + this.getCount().getCost() + '\n'
            + ' - Period of subscription: ' + this.getCount().getDuration() + ' days\n'
            + ' - Subscription Start: ' + this.getCount().getStartDate() + '\n'
            + ' - Subscription End: ' + this.getCount().getEndtDate() + '\n'
            + ' - Other Information: ' + this.getCount().getIncludesAds())
    }

}

export default Client