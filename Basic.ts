import Count from "./Count"
import Client from "./Client"
import Types from "./Types"

class Basic extends Count {
    constructor(client: Client) {
        super(Types.BASIC, 3, 30, false, client);

    }


}
export default Basic