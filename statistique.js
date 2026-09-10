module.exports = { tickettotale, chiffretotal, plusvendue }


function tickettotale(tickets) {
    let total = tickets.length;
    console.log(`Nombre total de tickets : ${total}`,)
}

function chiffretotal(tickets) {
    let total = 0;
    for (let i = 0; i < tickets.length; i++) {
        total += tickets[i].price;
    }
    console.log(`Chiffre d'affaires total : ${total}DH`);
}

function plusvendue(tickets, trips) {

    let find = {};
    for (let i = 0; i < tickets.length; i++) {
        let id = tickets[i].tripId
        if (find[id]) {
            find[id]++
        } else {
            find[id] = 1
        }

    }
    let max = 0;
    let tripmax;
    for (let idtrip in find) {
        if (find[idtrip] > max) {
            max = find[idtrip]
            tripmax = idtrip;
        }
    }
    for (let i = 0; i < trips.length; i++) {
        if (tripmax == trips[i].id) {
            console.log(`Trajet le plus vendu : ${trips[i].departure} --> ${trips[i].destination} : ${max} tickets vendus`)
        }
    }


}


