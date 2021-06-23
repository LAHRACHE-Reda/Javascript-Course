/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Function')
/* coding examples */


function addNumbers(a, b) {   // fonction qui prends 2 param et retourne la somme 
    return a + b;
};

log("La somme est : "+addNumbers(5,3));   // la somme de 5 et 3

var person = {
    name: "LAHRACHE",
    prenom: "Reda",
    age: 23
};

// fcts prédifinie
log("keys de person : "+Object.keys(person));  
log("values de person : "+Object.values(person));

log("string majuscule".toUpperCase());
log("STRING MINISCULE".toLowerCase());
log("LAHRACHE Reda".endsWith("Reda"));
log("LAHRACHE Reda".startsWith("Reda"));