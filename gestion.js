module.exports = {acheter, }
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
    
}