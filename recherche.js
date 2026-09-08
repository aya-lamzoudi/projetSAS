module.exports = {recherche,}
var prompt = require("prompt-sync")();

function recherche(tickets,trips) {
    let name = prompt("Veuillez saisir votre nom : ");
    let found = false;
    let index
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].passengerName == name) {
            for (let j = 0; j < trips.length; j++) {
                if (tickets[i].tripId == trips[j].id) {
                    departure = trips[j].departure;
                    destination = trips[j].destination;
                    price = trips[j].price;
                    console.log(
                        `ticket #${tickets[i].id} |` +
                        `passage:${tickets[i].passengerName}  |` +
                        `trajet: ${departure} --> ${destination}  |` +
                        `price : ${price}DH  |` +
                        `seat : ${tickets[i].seatNumber}`
                    )
                }
            }
            found = true;
        
        }
    }
    if (!found) {
        console.log("il n'y a aucun ticket a ce nom")
    } 
   
}

