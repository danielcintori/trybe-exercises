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

const age = 87;

if(age >= 18) {
    console.log ('Maior de idade');
}else{
    console.log('Menor de idade');
}

const personAge = 17;
let canVote;

if(personAge >= 16){
    canVote = 'Pode votar!';
}else{
    canVote = 'Não pode votar!';
}

console.log(canVote)