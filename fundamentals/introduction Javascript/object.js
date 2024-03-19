// const account = {
//     agency: '0975',
//     bank: {
//       cod: '012',
//       id: 4,
//       name: 'TrybeBank',
//     },
//   };

// console.log(account['bank']['name']);
// console.log(account.bank.name);

// const user = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     info: {
//       name: 'Jake',
//       lastName: 'Peralta',
//       address: {
//         street: 'Rua Dalvo Trombeta, 357 - Fundos',
//         district: 'Xererê',
//         city: 'Santana do Livramento',
//         state: 'Rio Grande do Norte',
//       },
//     },
//   };
  
//   console.log(user['id']); // 99
  
//   console.log(user.email); // jakeperalta@gmail.com
  
//   console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos
  
//   console.log(user['info']['address']['city']); // Santana do Livramento


//   const residents = [
//     {
//       name: 'Luíza',
//       lastName: 'Guimarães',
//       floor: 10,
//       apartment: 1005,
//     },
//     {
//       name: 'William',
//       lastName: 'Albuquerque',
//       floor: 5,
//       apartment: 502,
//     },
//     {
//       name: 'Murilo',
//       lastName: 'Ferraz',
//       floor: 8,
//       apartment: 804,
//     },
//     {
//       name: 'Zoey',
//       lastName: 'Brooks',
//       floor: 1,
//       apartment: 101,
//     },
//   ];

//   console.log(residents[0]);
//   console.log(residents[1]);
//   console.log(residents[2]);
//   console.log(residents[3]);

//   console.log(residents[2]['floor']);

//   console.log(residents[residents. length - 1]);

//   for(let i = 0; i < residents.length; i += 1){
//     const resident = residents[i];
//     console.log(resident.name);
//   }

//  const player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3},
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
//   }

//   console.log(`A jogadora ${player.name} ${player.lastName} tem 34 anos de idade.`);
//   console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes.`)


const customer = {
    firstName: 'Roberto',
    lastName: 'Silva',
    age: 22,
    job: 'Software Engineer'
};


const addProperty = (object, key, value) => {
    if( typeof object[key] === 'undefined'){
        object[key] = value;
    } 
};

addProperty(customer, 'birthPlayce', '19/07/1932');
addProperty(customer, 'email', 'roberto.dev@email.com');
addProperty(customer, 'fone', '1599999999');
addProperty(customer, 'userGithub', 'robertinhodev');
addProperty(customer, 'linkedIn', 'RS');

console.log(customer);