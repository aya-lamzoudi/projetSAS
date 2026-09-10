module.exports = {recherche,filtrer, trier}
var prompt = require("prompt-sync")();

function recherche(tickets, trips) {
    
    let name = prompt("Veuillez saisir votre nom : ");
    let found = false;
    // let index
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].passengerName == name) {
            found = true;
            for (let j = 0; j < trips.length; j++) {
                if (tickets[i].tripId == trips[j].id) {
                    let departure = trips[j].departure;
                    let destination = trips[j].destination;
                    let price = trips[j].price;
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
    }
    if (!found) {
        console.log("il n'y a aucun ticket avec ce nom")
    } 
   
}

function filtrer(trips) {
    let ville = prompt("Veuillez saisir la ville de départ : ");
    let found = false;
    for (let i = 0; i < trips.length; i++){
        if (trips[i].departure.toUpperCase() == ville.toUpperCase()) {
             console.log(
                `trajet: ${trips[i].departure} --> ${trips[i].destination}  |` +
                `price : ${trips[i].price}DH  ` 
            )
            found=true
        } 
    }
    if (!found) {
        console.log("il y a aucun train qui part de cette ville");
    }
}

function trier(trips) {
    
    //trier par prix
    let tritrips = trips;
    for (let i = 0; i < tritrips.length - 1; i++){
        for (let j = 0; j < tritrips.length - i - 1;j++){
            if (tritrips[j].price > tritrips[j + 1].price) {
                let tmp = tritrips[j];
                tritrips[j] = tritrips[j + 1]
                tritrips[j + 1] = tmp;
            }
        }
    }
    console.log("voice tous les trajet trier par prix : ")
    for (let i = 0; i < tritrips.length; i++){
         console.log(
                `${trips[i].departure} --> ${trips[i].destination}  :` +
                `${trips[i].price}DH  ` 
            )
    }
    
}