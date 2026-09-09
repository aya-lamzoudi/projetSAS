module.exports = {acheter,annuler }
var prompt = require("prompt-sync")();
function acheter(trips, ticket) {
    let found = false;
    let name = prompt("Veuillez saisir votre nom : ");
    let Id = parseInt(prompt("Veuillez saisir Identifiant du trajet :"));
    for (let i = 0; i < trips.length; i++){
        if (Id == trips[i].id && trips[i].availableSeats > 0) {
            trips[i].availableSeats--;
            seatnumber = parseInt(50 - trips[i].availableSeats);
         let newticket = {
            id: ticket.length + 1,
            passengerName: name,
            tripId: trips[i].id,
            seatNumber: seatnumber,
            price: trips[i].price,
        }
        ticket.push(newticket)
            console.log("Votre opération a été un succès.")
            console.log("=================votre ticket=======================")
            
console.log(`Id: ${newticket.id}
passanger:${newticket.passengerName}
trajet:${trips[i].departure}-->${trips[i].destination}
place:${newticket.seatNumber}
prix:${trips[i].price}DH`)
            found = true
            break;
        } else if (Id == trips[i].id && trips[i].availableSeats == 0) {
            found = true
            console.log("Train complet.")
            break;
        }
    }
    if (!found) {
        console.log("Trajet introuvable.");
  }
    

}

function annuler(trips, tickets) {
    let Id = parseInt(prompt("Veuillez saisir Identifiant du ticket : "));
    let indexticket = -1;
    for (let i = 0; i < tickets.length; i++){
        if (Id == tickets[i].id) {
            indexticket = i;
            break;
        }
    }
    if (indexticket == -1) {
        console.log("Ticket introuvable. ");
    } else {
         for (let i = 0; i < trips.length; i++){
        if (tickets[indexticket].tripId == trips[i].id) {
            trips[i].availableSeats++;
            break;
        }
        }
        tickets.splice(indexticket, 1);
        console.log("Ticket annulé avec succès. ")
    }


}