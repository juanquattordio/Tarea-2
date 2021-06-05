import Count from "./Count"
import Client from "./Client"
import Types from "./Types"

class Free extends Count {

    constructor(client: Client) {
        super(Types.FREE, 0, 15, true, client);

    }

}
export default Free