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

