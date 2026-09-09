module.exports = { tickettotale, chiffretotal}
const{menu}=require ("./menu.js")
var prompt = require("prompt-sync")();

function tickettotale(tickets) {
    let total = tickets.length;
    console.log(`Nombre total de tickets : ${total}`,)
}

function chiffretotal(tickets) {
    let total = 0;
    for (let i = 0; i < tickets.length; i++){
        total += tickets[i].price;
    }
    console.log(`Chiffre d'affaires total : ${total}DH`);
}

function plusvendue(tickets){
          
}