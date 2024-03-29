// Tipos de dados em JavaScript
// number  = 1, 2, 3
// string = "Quotes"
// bolean = yes or no
// function = block of code
// object = Keys and values
// undefined = undefined value
// null = without a value

// Há três maneiras de declarar uma variável em JavaScript:

// Antiga versão com vazamento de escopo
// var userEmail = 'exemple@email.com';
// Versão nova sem vazamento de escopo
// let userId = 1234;
// Versão segura de declarar uma variável e não altera-lá
// const userLocation = 'Brasil';

// if (true) {
//     var userAge = '20';
//     console.log(userAge)
// }
// console.log(userAge);

// var userName = 'Isabella';
// var userName = 'Lucas';

// const favoriteLanguage = 'JavaScript';
// favoriteLanguage = 'Python';

// console.timeLog(favoriteLanguage);

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';

// console.log(favoriteTechnology);

// let patientId = 50;
// let isEnrolled = true;
// let patientEmail = 'ana@email.com';

// console.log(typeof patientId);

// const myName = 'Carolina';
// const birthCity = 'Natal';
// const birthYear = 1994;
// console.log(myName, birthCity, birthYear);
// console.log(`OLá ${myName} asdfasdfasdfas ${birthCity}`);

// const fullName = 'João Carlos Paiva';
// const city = 'Sâo Paulo';
// const age = 30;
// const height = 1.75;

// Operadores Aritméticos
// + Adição - Subtração * Multiplicação / Divisão % Módulo += Incremento -= Decremento ++

// let base = 5;
// let height = 8;
// let area = base * height;
// let perimeter = base *2 + height * 2;
// console.log(perimeter);

// Operador == igual
// Estritamente igual ===
// Diferente !=
// > Maior
// <= Menor igual

// const age = 87;

// if(age >= 18) {
//     console.log ('Maior de idade');
// }else{
//     console.log('Menor de idade');
// }

// const personAge = 11;
// let canVote;

// if(personAge >= 16){
//     canVote = 'Pode votar!';
// }else{
//     canVote = 'Não pode votar!';
// }

// console.log(canVote)

// const personAge = 17;
// const canVote = personAge > 16 ? 'Pode votar!' : 'Não pode votar!';

// console.log(canVote);

// let grade = Math.floor(Math.random() * 100) + 1;
// console.log(grade);

// if ( grade > 80) {
//     console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
// } else if ( grade < 80 && grade > 60) {
//     console.log('Você está na nossa lista de espera.');
// }else{
//     console.log('Infelizmente, você reprovou.');
// }

// const food = 'bread';
// const drink = 'coffee';

// if(drink === 'coffee' && food === 'bread'){
//     console.log('Obrigado!');
// }else{
//     console.log('Erraram meu pedido.');
// }

// let carrot = true;
// let milk = true;
// let rice = true;
// let bean = true;

// let shoppingList = carrot && milk && rice && bean;
// console.log(shoppingList);

// let currentHour = Math.floor(Math.random() * 24) + 1;
// let message;
// console.log(currentHour);
// if (currentHour > 22) {
//     console.log('Não deveríamos comer nada, é hora de dormir');
// } else if (currentHour > 18 && currentHour < 22) {
//     console.log('Rango da noite, vamos jantar')
// } else if(currentHour >=14 && currentHour < 18){
//     console.log('Vamos fazer um bolo para o café da tarde?');
// } else if(currentHour >= 11 && currentHour < 14){
//  console.log('Hora do almoço');
// } else if (currentHour >= 4 && currentHour <=11){
//     console.log('Hmm, cheiro de café recém passdo');
// };

// const food = 'bread';
// const drink= "coffee";

// if(drink === 'caffee' && food === 'bread') {
//     console.log('Thanks!');
// } else{
//     console.log("It's not my order")
// }

// console.log(10 + 5 * 5);

// console.log(!(2+2) === 4);

// let squirtle = "Segundo melhor pokemon";

// console.log(!42);
// console.log(!0);

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let num3 = Math.floor(Math.random() * 10) + 1;


// console.log(`${num1} + ${num2} é igual a ${num1 + num2}`);
// console.log(`${num1} - ${num2} é igual a ${num1 - num2}`);
// console.log(`${num1} * ${num2} é igual a ${num1 * num2}`);
// console.log(`${num1} / ${num2} é igual a ${num1 / num2}`);
// console.log(`${num1} % ${num2} é igual a ${num1 % num2}`);


// if(num1 > num2){
//     return console.log(`O número ${num1} é maior que ${num2}`);
// }else{
//     return console.log(`O número ${num2} é maior que ${num1}`);
// }

// num1 > num2 ? console.log(`O número ${num1} é maior que ${num2}`) : console.log(`O número ${num2} é maior que ${num1}`) ;

if (num1 > num2 && num1 > num2) {
    return console.log(`O número ${num1} é maior que ${num2} e que ${num3}`);
}else if(num2 > num1 && num2 > num3){
    return console.log(`O número ${num2} é maior que ${num1} e que ${num3}`);
}else if(num3 > num1 && num3 > num2){
    return console.log(`O número ${num3} é maior que ${num1} e que ${num2}`);
}else{
    return console.log('Existem números iguais');
}