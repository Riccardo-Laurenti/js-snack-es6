/*
SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// Creo array di oggetti
const footballTeam =[
    {
        nome: 'Roma',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Manchester City',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Cska Mosca',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Liverpool',
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Chelsea',
        punti: 0,
        falli_subiti: 0
    }
];

// Creo variabile per randomizzare elementi
let elemStats = footballTeam.map((elem) => {
    
    elem.punti = Math.floor((Math.random() * 100) + 1);
    elem.falli_subiti = Math.floor((Math.random() * 50) + 1);


});

