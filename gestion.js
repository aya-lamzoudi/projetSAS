module.exports = { acheter, annuler }
var prompt = require("prompt-sync")();

let id = 11;
function acheter(trips, ticket) {
    let found = false;
    console.log("pour acheter un ticket : ")
    let name = prompt("Veuillez saisir votre nom : ");
    let Id = parseInt(prompt("Veuillez saisir Identifiant du trajet : "));

    for (let i = 0; i < trips.length; i++) {
        if (Id == trips[i].id && trips[i].availableSeats > 0) {
            found = true;
            let seatnumber = 1;
            let place = true;
            while (place) {
                place = false;
                for (let j = 0; j < ticket.length; j++) {
                    if (ticket[j].tripId == trips[i].id && ticket[j].seatNumber == seatnumber) {

                        place = true;
                        seatnumber++;
                        break;
                    }
                }
            }
            trips[i].availableSeats--;

            let newticket = {
                id: id,
                passengerName: name,
                tripId: trips[i].id,
                seatNumber: seatnumber,
                price: trips[i].price
            };
            id++;
            ticket.push(newticket);

            console.log("Votre opération a été effectue avec succès.");
            console.log("   ================= votre ticket =================");
            console.log(`
            Id: ${newticket.id}
            passanger: ${newticket.passengerName}
            trajet: ${trips[i].departure} --> ${trips[i].destination}
            place: ${newticket.seatNumber}
            prix: ${trips[i].price}DH`);
            break;

        } else if (Id == trips[i].id && trips[i].availableSeats == 0) {
            found = true;
            console.log("Train complet.");
            break;
        }
    }
    if (!found) {
        console.log("Trajet introuvable.");
    }
}


function annuler(trips, tickets) {
    console.log(" es-tu sûr êtes sûr que vous voulez annuler \n 1:oui \n 2.non")
    let choix = parseInt(prompt("entre votre choix : "))
    if (choix == 1) {
        console.log("pour annuler un ticket : ")
        let Id = parseInt(prompt("Veuillez saisir Identifiant du ticket : "));
        let indexticket = -1;
        for (let i = 0; i < tickets.length; i++) {
            if (Id == tickets[i].id) {
                indexticket = i;
                break;
            }
        }
        if (indexticket == -1) {
            console.log("Ticket introuvable. ");
        } else {
            for (let i = 0; i < trips.length; i++) {
                if (tickets[indexticket].tripId == trips[i].id) {
                    trips[i].availableSeats++;
                    break;
                }
            }
            tickets.splice(indexticket, 1);
            console.log("Ticket annulé avec succès. ")
        }

    }
}



