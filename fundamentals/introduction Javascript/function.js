// const giveGreeting = (name) => {
//     console.log(`Olá, ${name}!`);
// }

// let personName = 'Daniel';
// giveGreeting(personName);

// const sum = (n, n2) => {
//     return n + n2;
// }

// const sub = (n, n2) =>{
//     return n - n2;
// }

// const mult = (n, n2) =>{
//     return n * n2;
// }

// const div = (n, n2) =>{
//     return n / n2;
// }


// console.log(sum(2,3));
// console.log(sub(2,3));
// console.log(mult(2,3));
// console.log(div(2,3));


// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// const addCustomers = (customerName, newCustomersName) => {
//     if(typeof customerName != 'string' && typeof newCustomersName != 'string'){
//         throw new Error('Você precisa fornecer apenas string');
//     }else{
//         return trybeBankCustomers.push(customerName);
//     }
// }

// addCustomers('Exemplo');
// addCustomers('E');
// addCustomers('x');


// console.log(trybeBankCustomers);


// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// const addCustomers = (trybeBankCustomers, newCustomers) => {
//     if (!Array.isArray(newCustomers)) {
//         throw new Error('O segundo parâmetro deve ser um array.');
//     }

//     const nonStringValues = newCustomers.filter(item => typeof item !== 'string');
//     if (nonStringValues.length > 0) {
//         throw new Error('Todos os valores precisam ser strings.');
//     }

//     trybeBankCustomers.push(...newCustomers);
// }

// try {
//     addCustomers(trybeBankCustomers, ['Exemplo', 'E', 'x']);
//     console.log(trybeBankCustomers);
// } catch (error) {
//     console.error(error.message);
// }


// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// function addCustomers(customers, newCustomers) {
//   for (let index = 0; index < newCustomers.length; index += 1) {
//     if (typeof newCustomers[index] === 'string') {
//       customers.push(newCustomers[index]);
//     } else {
//       return 'Todos os valores precisam ser strings.';
//     }
//   }
// return trybeBankCustomers;
// };

// console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
// console.log(addCustomers(trybeBankCustomers, ['Miranda', 78])); // Todos os valores precisam ser strings.

