/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring

*/




// Creo array di oggetti
const bikeRun = [
    {
        name: 'Riccardo Laurenti ',
        peso: 3

    },
    {
        name: 'Francesco Sanarino ',
        peso: 4.3

    },
    {
        name: 'Kickboxing Bike',
        peso: 10

    },
    {
        name: 'Savadeck Warwinds 3.0',
        peso: 93

    },
    {
        name: 'Pininfarina 2.3 ',
        peso: 7

    },
    {
        name: 'Runners Bike ',
        peso: 5

    }
    
    
];

console.log(bikeRun);


// Inserisco la variabile prendendo come riferimento il primo elemento dell'array
let firstarBike = bikeRun[0]

bikeRun.forEach((rif)=>{

    if (rif.peso < firstarBike.peso) {
        
        rif.peso= firstarBike.peso
        
    }
    
});

console.log(firstarBike);

console.log( `La bicicletta più leggera è ${firstarBike.name} con un peso di circa ${firstarBike.peso}kg`);