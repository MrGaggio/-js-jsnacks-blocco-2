//Crea un array di numeri interi 
//e fai la somma di tutti gli elementi che sono in posizione dispari

//creo array numeri
let numbers = [];
//creo numero random per tante volte
for(let i = 0; i < 10; i++){
    //pusho dentro all'array un numero random
    numbers.push(getRandomNumber(1, 100));
}

console.log(numbers);
let sum = 0;

//leggo l'array in ordine
for(let x = 0; x < numbers.length; x++)
{
    //se la posizione è dispari lo sommo
    if(x % 2 != 0){
        sum += numbers[x]; //sum = sum + numbers[x]
    }
}

console.log(sum);





function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}