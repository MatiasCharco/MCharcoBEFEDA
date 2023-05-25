let numOne = 1;
let numTwo = 2;
let sum = numOne+numTwo;
console.log(numOne == numTwo); 

let js ='JavaScript';
let py ='Pyton';

console.log(js == py);

let arrExample = ['How','are','you'];

let dog = {
    Pows: 4,
    Tale: 1,
    Bark: true}

console.log(typeof(dog));


function amar(nombre1, nombre2) {
   let a = nombre1 + ' ama a ' + nombre2;
    return a;
}

console.log(amar('Maria','Jose'));


// arrow Function

const duplicate = num => (num*2);

let numdupl = duplicate(5);
console.log(numdupl);