/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente1 = {

        nome : "davide",
        cognome : "detratti",
        eta : 26

};
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 /* for (let key in studente1) {
    console.log(key + " : " + studente1[key])
} */ 
//Creare un array di oggetti di studenti.
var studenti = [{
    nome : "Gino",
    cognome : "Fastidio",
    eta : 23
} , {
    nome : "Veronica",
    cognome : "Rossi",
    eta : 24
}, {
    nome : "Marta",
    cognome : "Culettorosa",
    eta : 22
}]
for (let i = 0; i < studenti.length; i++) {
    let studente = studenti[i]
    for (let key in studente) {
        console.log((studente.nome + " " + studente.cognome))
    }
};