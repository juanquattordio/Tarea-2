"use strict";
exports.__esModule = true;
var Client_1 = require("./Client");
var clients = [];
// Instance of Client
var cliente = new Client_1["default"]().setName("Juan").setSurname("Quattordio").setDNI("35463137").setSAge(30).setEmail("juanquattordio@gmail.com");
clients.push(cliente);
var cliente2 = new Client_1["default"]().setName("Pedro").setSurname("Quattordio").setDNI("35463138").setSAge(31).setEmail("pedroquattordio@gmail.com");
clients.push(cliente2);
// change type of Count client1.
cliente.setCount(2);
var DNI;
var foundClient;
// Client exist
console.log("Welcome!");
console.log("Please, enter the DNI you are looking for:");
DNI = "35463137"; // input by form
foundClient = searchDNI(clients, DNI);
if (foundClient != undefined) {
    console.log("Edit/Delete client section");
    foundClient.setCount(1);
    console.log("Change successfully");
    foundClient.getInfoClient();
}
else
    console.log("Add new client section");
// Client doesn't exist
console.log("\nWelcome!");
console.log("Please, enter the DNI you are looking for:");
DNI = "37493641"; // input by form
foundClient = searchDNI(clients, DNI);
if (foundClient != undefined) {
    console.log("Edit/Delete client section");
    foundClient.setCount(1);
    console.log("Change successfully");
    foundClient.getInfoClient();
}
else
    console.log("Add new client section");
console.log("Exit");
function searchDNI(clients, DNI) {
    var found = clients.filter(function (cliente) { return cliente.getDNI() === DNI; });
    if (found.length > 0) {
        console.log(found[0].getSurname() + " " + found[0].getName() + " has already a " + found[0].getCount().getTypeCount()) + " count.";
    }
    else
        console.log("Doesn't exist any client with DNI: " + DNI + ". You can add it.");
    return found[0];
}
/*clients[0].getInfoClient();

cliente.setCount(2);

clients[0].getInfoClient();*/
