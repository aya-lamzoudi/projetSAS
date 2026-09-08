module.exports = {acheter,annuler }
var prompt = require("prompt-sync")();
function acheter(trips, ticket) {
    
    let found = false;
    let tripId ,price;
    let name = prompt("Veuillez saisir votre nom : ");
    let Id = parseInt(prompt("Veuillez saisir Identifiant du trajet :"));
    for (let i = 0; i < trips.length; i++){
        if (Id == trips[i].id && trips[i].availableSeats > 0) {
            trips[i].availableSeats--;
            seatnumber = parseInt(50 - trips[i].availableSeats);
            tripId = trips[i].id;
            price = trips[i].price;
            found = true
            break;
        }
    }
    if (found) {
        let newticket={
            id: ticket.length + 1,
            passengerName: name, 
            tripId: tripId, 
            seatNumber: seatnumber ,
            price: price
        }
        ticket.push(newticket)
        console.log("Votre opération a été un succès.")
        
    }else console.log("Ce voyage n'est pas disponible.")
    

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