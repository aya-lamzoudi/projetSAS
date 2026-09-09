module.exports = {affichertrajet, affichertickets}
var prompt = require("prompt-sync")();
function affichertrajet(trips) {

    let id=" id"
    let departure=" departure"
    let destination= " destination"
    let departureTime=" departureTime"
    let arrivalTime=" arrivalTime"
    let price=" price"
    let availableSeats= " availableSeats"

    while(id.length<5){
        id+=" "
    }
    while(departure.length<15){
        departure+=" "
    }
    while(destination.length<15){
        destination+=" "
    }
    while(departureTime.length<15){
        departureTime+=" "
    }
    while(arrivalTime.length<15){
        arrivalTime+=" "
    }
    while(price.length<10){
        price+=" "
    }
    while(availableSeats.length<18){
        availableSeats+=" "
    }


    console.log("+-----+---------------+---------------+---------------+---------------+----------+------------------+")
    console.log(`|${id}`+`|${departure}`+`|${destination}`+`|${departureTime}`+`|${arrivalTime}`+`|${price}`+`|${availableSeats}|`)
    console.log("+-----+---------------+---------------+---------------+---------------+----------+------------------+")
    for(let i=0;i<trips.length;i++){

    let id=String(trips[i].id);
    let departure= trips[i].departure
    let destination= trips[i].destination
    let departureTime=trips[i].departureTime
    let arrivalTime=trips[i].arrivalTime
    let price=String(trips[i].price)
    let availableSeats=String(trips[i].availableSeats)

    while(id.length<5){
        id+=" "
    }
    while(departure.length<15){
        departure+=" "
    }
    while(destination.length<15){
        destination+=" "
    }
    while(departureTime.length<15){
        departureTime+=" "
    }
    while(arrivalTime.length<15){
        arrivalTime+=" "
    }
    while(price.length<10){
        price+=" "
    }
    while(availableSeats.length<18){
        availableSeats+=" "
    }

     console.log(`|${id}`+`|${departure}`+`|${destination}`+`|${departureTime}`+`|${arrivalTime}`+`|${price}`+`|${availableSeats}|`)

 console.log("+-----+---------------+---------------+---------------+---------------+----------+------------------+")
    }
    
    
}
function affichertickets(tickets, trips) {

    if (tickets.length == 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    // Les titres des colonnes pour ajouter space
    let id = "ID";
    let trajet=" Trajet"
    let passenger = "passanger";
    let seat = "Place";
    let price = "Prix";

    while (id.length < 5) {
        id += " ";
    }

    while (passenger.length < 15) {
        passenger += " ";
    }

    while (trajet.length < 30) {
        trajet += " ";
    }

    while (seat.length < 8) {
        seat += " ";
    }

    while (price.length < 10) {
        price += " ";
    }

  
    console.log("+-----+---------------+------------------------------+--------+----------+");
    console.log(`|${id}|${passenger}|${trajet}|${seat}|${price}|`);
    console.log("+-----+---------------+------------------------------+--------+----------+");


    for (let i = 0; i < tickets.length; i++) {

        let id = String(tickets[i].id);
        let passenger = tickets[i].passengerName;
        let trajet=""
        let seat = String(tickets[i].seatNumber);
        let price = String(tickets[i].price) + " DH";

        // Chercher le trajet correspondant au tripId
        for (let j = 0; j < trips.length; j++) {

            if (tickets[i].tripId == trips[j].id) {

                trajet = trips[j].departure +"-->"+trips[j].destination;

                break;
            }
        }

        while (id.length < 5) {
            id += " ";
        }

        while (passenger.length < 15) {
            passenger += " ";
        }

        while (trajet.length < 30) {
            trajet += " ";
        }


        while (seat.length < 8) {
            seat += " ";
        }

        while (price.length < 10) {
            price += " ";
        }

        // Afficher le ticket
        console.log(
            `|${id}|${passenger}|${trajet}|${seat}|${price}|`
        );

        console.log("+-----+---------------+------------------------------+--------+----------+");
    }
}