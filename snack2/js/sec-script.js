/*
SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
SNACK 2
Abbiamo un elenco degli STUDENT LIST di una facoltà, identificati da id, Nome e somma totale dei loro vote di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli STUDENT LIST che hanno un totale di vote superiore a 70
2.Dobbiamo creare una lista di tutti gli STUDENT LIST che hanno un totale di vote superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli STUDENT LIST: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
Questo è l'elenco degli STUDENT LIST:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84 

*/

// ARRAY DI OGETTI
const studentsList = [
    {
        'id': '213',
        'nome' : 'Marco della Rovere',
        'voto': '78'   
    },
    {
        'id': '110',
        'nome' : 'Paola Cortellessa ',
        'voto': '96'   
    },
    {
        'id': '250',
        'nome' : 'Andrea Mantegna',
        'voto': '48'   
    },
    {
        'id': '145',
        'nome' : 'Gaia Borromini',
        'voto': '74'   
    },
    {
        'id': '196',
        'nome' : ' Luigi Grimaldello ',
        'voto': '68'   
    },
    {
        'id': '102',
        'nome' : 'Piero della Francesca',
        'voto': '50'   
    },
    {
        'id': '120',
        'nome' : 'Francesca da Polenta ',
        'voto': '84'   
    }

];

console.log(studentsList);

// PROPRIETA MAP ALL'ARRAY PER METTERE IN MAIUSCOLO IL NOME DEGLI STUDENT LIST
const upper = studentsList.map((studentsList)=> studentsList.nome.toUpperCase());
console.log(upper);

// PROPRIETA FILTER ALL'ARRAY PER FILTRARE DALLA LISTA DI OBJECT GLI STUDENT LIST CHE HANNO AVUTO UN VOTO SUPERIORE A 70
const vote = studentsList.filter((item)=>{if (item.voto >= '70') return true } );
console.log(vote);



// PROPRIETA FILTER ALL'ARRAY PER FILTRARE DALLA LISTA DI OBJECT GLI STUDENT LIST CHE HANNO UN ID SUPERIORE O UGUALE A 120 E HANNO AVUTO UN VOTO SUPERIORE A 70
const voteId = vote.filter((item)=>{if (item.id > '120') return true } );
console.log(voteId);