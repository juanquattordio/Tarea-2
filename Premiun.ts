import Count from "./Count"
import Client from "./Client"
import Types from "./Types"

class Premiun extends Count {
    constructor(client: Client) {
        super(Types.PREMIUN, 9, 30, false, client);

    }


}
export default Premiun