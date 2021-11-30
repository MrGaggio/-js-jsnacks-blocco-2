// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
// Gatsby vuole generare una falsa lista di invitati.

let names = ["Tony", "Paolino", "Bilbo", "Luke", "Eli"];
let surname = ["Stark", "Paperino", "Beggins", "Skywalker"];

//creao un array di invitati
let invitati = [];

let maxValue = 10;

//per ogni nome casuale, associo un cognome casuale
for(let i = 0; i < maxValue;){
    let numberRandomName = getRandomNumber(0, names.length);
    let numberRandomSurname = getRandomNumber(0, surname.length);

    //creo l'invitato
    let invitato = names[numberRandomName] + " " + surname[numberRandomSurname];
    //controllo SE è nella lista/array
    if(!invitati.includes(invitato)){
        //SE non c'è lo scrivo
        invitati.push(invitato);
        i++;
    }
}

console.log(invitati);




function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}