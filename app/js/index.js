/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrays')
/* coding examples */


var famille = ["Simo", "Tali", "Reda", "Nadou", "Ayou"];

log(famille);

log("La taille du tableau = "+famille.length);

for(var member of famille){
    log(member);
}

famille.forEach(function(n, index){    // callback
    log(index + " - " + n);
});