// const personName = 'Michelle';
// const personName2 = 'Renan';
// const personLastName = 'Silva'
// const personLastName2 = 'Nascimento';
// const personFullName = `${personName} ${personLastName}`;
// const personFullName2 = `${personName2} ${personLastName2}`;
// console.log(personFullName);
// console.log(personFullName2);
// Template literals
// const myName = "Adrian";
// console.log("Hello" + " " + myName);
// console.log(`Hello ${myName}`);
// const product = "Apple Vision Pro";
// const price = 4048;
// const discount = 10;
// text = `The product ${product} regular price is u$${price} but this weekend with discount you only need to pay ${
//   price - price * (discount / 100)
// } `;
// console.log(text);
// const shoppingList= ['Rice', 'Potato', 'Milk', 'Beans'];
// console.log(shoppingList[0]);
// console.log(shoppingList[1]);
// shoppingList[1] = 'Watermelon';
// console.log(shoppingList[1]);
// push() adicionar elemento ao final do array
// unshift() adiciona um elemento ao início do array
// pop() Remove o último elemento do array
// shift() Remove o primeiro elemento do array 
// shoppingList.forEach((e) => console.log(e));
// shoppingList.push('zebra');
// shoppingList.forEach((e) => console.log(e));
// shoppingList.unshift('Albatroz');
// shoppingList.forEach((element) => console.log(element));
// shoppingList.pop();
// shoppingList.shift();
// shoppingList.forEach((element) => console.log(element));
// console.log(shoppingList.length);
// const menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
// let menuServices = '';
// menuServices = menu[1];
// console.log(menuServices)
// menu.push('Contato');
// console.log(menu)
// const laps = 65;
// for( let i = 1; i <= laps; i++){
//     console.log(`Volta ${i} completada!`);
// }
// console.log('Fim da corrida!');
// //Array de números
// const numbers = [2,19, 23, 4, 8, 19];
// //Variáveis complementar que irá acumular os valores somados
// let sum = 0;
// //loop for que vai somar tudo;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
//     console.log(sum);    
// }
// console.log(sum);
// const cars = ['saab','Volvo', 'BMW', 'Chevrolet'];
// for(let i = 0; i < cars.length; i += 1){
//     const currentCar = cars[i];
//     console.log(currentCar);
//     console.log(cars[i]);
// }
// const groceryLIst = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];
// for (let index = 0; index < groceryLIst.length; index++) {
//     console.log(groceryLIst[index]);
// }
// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 200];
// let sum = 0;
// numbers.forEach((e) => console.log(e));
// for (let index = 0; index < numbers.length; index++) {
//        sum += numbers[index];
//        console.log(sum);
// }
// let media = sum/ numbers.length;
// console.log(`A media do total ${sum} e o número de elementos ${numbers.length} da a média de : ${media}`);
// if (media > 20) {
//     console.log('O valor da média aritmética é maior que 20');
// }else {
//     console.log('O valor da média aritmética é menor ou igual a 20');
// }
// console.log('Vou descobrir o maior valor dentro do array ' + numbers);
// let biggest = 0;
// for (let index = 0; index < numbers.length; index++) {
//     if(biggest < numbers[index]){
//         biggest = numbers[index];
//     }
//     console.log(biggest);
// }
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] % 2 === 1){
//         console.log(numbers[index]);
//     }    
// }
// fatorial

// function calcularFatorial(numbero){
//     if (numero === 0 || numero === 1){
//         return 1;
//     }else{
//         let fatorial = 1;
//         for(let i = 2; i<= numero; i++){
//             fatorial *= i
//         }
//         return fatorial;
//     }
// }

// let numero = 10;
// let resultado = calcularFatorial(numero);
// console.log(`O fatoraial de ${numero} é igual a ${resultado}`);


// function invertePalavra(str){
// console.log(str);
// let separada = str.split('');
// console.log(separada);
// let invertida = separada.reverse();
// console.log(invertida);
// let agrupada = invertida.join('');
// console.log(agrupada);
// return agrupada;
// }

// function invertePalavra(str){
//     const letrasInvertidas = str.split('').reverse().join('');
//     return letrasInvertidas
// }


// const invertePalavra = (palavra) => {
//     if(typeof palavra != 'string'){
//         throw new Error('Você só pode enviar Strings');
//     }else{
//         const palavraInvertida = palavra.split('').reverse().join('');
//         return palavraInvertida;
//     }
// }


// let palavraAInverter = 'Daniel';
// let palavraInvertida = invertePalavra(palavraAInverter);
// console.log(`O inverso da palavra ${palavraAInverter} é ${palavraInvertida}`);



// const squareDraw = (number) => {
//  for (let i = 0; i < number; i+= 1) {
//         let line = '';
//         for (let j = 0; j < number; j+= 1) {
//             line += '* ';            
//         }
//         console.log(line);
//  }
// }


const squareDraw = (number) => {
    const line = '* '.repeat(number)
    for (let i = 0; i < number; i+= 1) {          
           console.log(line);
    }
   }

const squareSize = 2;
squareDraw(squareSize);

const triangleDraw = (base) => {
    for (let linha = 1; linha <= base; linha++) {
        let linhaAsteriscos = '';
        for (let coluna = 1; coluna <= linha; coluna++) {
            linhaAsteriscos += '* ';
        }
        console.log(linhaAsteriscos);
    }
}

const baseTriangulo = 5;
triangleDraw(baseTriangulo);

const invertedTriangleDraw = (base) => {
    for (let linha = base; linha >= 1; linha--) {
        let linhaAsteriscos = '';
        for (let coluna = 1; coluna <= linha; coluna++) {
            linhaAsteriscos += '* ';
        }
        console.log(linhaAsteriscos);
    }
}

const baseInvertedTriangulo = 5;
invertedTriangleDraw(baseInvertedTriangulo);
