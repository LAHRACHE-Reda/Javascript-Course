/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Objects')
/* coding examples */

// objet
var person = {
    name: "Lahrache Reda",
    age: 23,
    heigh : 184,
    address: {   // objet comme attribut d'un autre objet
        pays: "Maroc",
        ville: "Casablanca",
        rue: "Hay artisanat"
    }
};

// afficher l'objet sous forme string json
log("**l'objet person sous forme json: "+JSON.stringify(person));

// accéder aux attributs de person
log("**la valeur de l'attribut nom: "+person.name);

// afficher les valeurs de l'objet
log("**Les valeurs de l'objet person: "+Object.values(person));
log("**Les valeurs de l'objet adresse: "+Object.values(person.address));
