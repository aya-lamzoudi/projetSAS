module.exports = {affichertrajet, affichertickets}
var prompt = require("prompt-sync")();

function affichertrajet(trips) {
for (let i = 0; i < trips.length; i++) {
    console.log(
        `#${trips[i].id}| ${trips[i].departure} → ${trips[i].destination} |   ` +
        `Départ : ${trips[i].departureTime} |  ` +
        `Arrivée : ${trips[i].arrivalTime} |   ` +
        `Prix : ${trips[i].price} DH |   ` +
        `  Places disponibles : ${trips[i].availableSeats}`
    );
}

    
// console.log(
//     "ID".padEnd(4) +
//     "Départ".padEnd(15) +
//     "Destination".padEnd(15) +
//     "Départ".padEnd(10) +
//     "Arrivée".padEnd(10) +
//     "Prix".padEnd(10) +
//     "Places"
// );

// console.log("-".repeat(74));

// for (let i = 0; i < trips.length; i++) {
//     console.log(
//         String(trips[i].id).padEnd(4) +
//         trips[i].departure.padEnd(15) +
//         trips[i].destination.padEnd(15) +
//         trips[i].departureTime.padEnd(10) +
//         trips[i].arrivalTime.padEnd(10) +
//         (trips[i].price + " DH").padEnd(10) +
//         trips[i].availableSeats
//     );
// }
    // console.table(affichage);
}
function affichertickets(tickets, trips) {
    let departure, destination, price;
    
    if (tickets.length == 0) {
        console.log("Aucun ticket enregistré. ");
    } else {
        for (let i = 0; i < tickets.length; i++) {
            for (let j = 0; j < trips.length; j++) {
                if (tickets[i].tripId == trips[j].id) {
                    departure = trips[j].departure;
                    destination = trips[j].destination;
                    price = trips[j].price;
                    break;
                }
            }
            console.log(
                `ticket #${tickets[i].id} |` +
                `passage:${tickets[i].passengerName}  |` +
                `trajet: ${departure} --> ${destination}  |` +
                `price : ${price}DH  |` +
                `seat : ${tickets[i].seatNumber}`
            )
        }
    }
}

