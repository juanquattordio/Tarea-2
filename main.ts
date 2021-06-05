import Count from "./Count";
import Free from "./Free";
import Client from "./Client"

let clients: Array<Client> = [];
// Instance of Client
let cliente = new Client().setName("Juan").setSurname("Quattordio").setDNI("35463137").setSAge(30).setEmail("juanquattordio@gmail.com");
clients.push(cliente);
let cliente2 = new Client().setName("Pedro").setSurname("Quattordio").setDNI("35463138").setSAge(31).setEmail("pedroquattordio@gmail.com");
clients.push(cliente2);
// change type of Count client1.
cliente.setCount(2);

let DNI: string;
let foundClient: Client;

// Client exist
console.log("Welcome!");
console.log("Please, enter the DNI you are looking for:");
DNI = "35463137";   // input by form
foundClient = searchDNI(clients, DNI)
if (foundClient != undefined) {
    console.log("Edit/Delete client section")
    foundClient.setCount(1)
    console.log("Change successfully")
    foundClient.getInfoClient();
} else console.log("Add new client section")

// Client doesn't exist
console.log("\nWelcome!");
console.log("Please, enter the DNI you are looking for:");
DNI = "37493641";   // input by form
foundClient = searchDNI(clients, DNI)
if (foundClient != undefined) {
    console.log("Edit/Delete client section")
    foundClient.setCount(1)
    console.log("Change successfully")
    foundClient.getInfoClient();
} else console.log("Add new client section")


console.log("\nExit")

function searchDNI(clients: Array<Client>, DNI: String): Client {
    let found = clients.filter(cliente => cliente.getDNI() === DNI);
    if (found.length > 0) {
        console.log(found[0].getSurname() + " " + found[0].getName() + " has already a " + found[0].getCount().getTypeCount()) + " count.";
    } else console.log("There is no client with DNI: " + DNI + ". You can add it.");

    return found[0];
}
