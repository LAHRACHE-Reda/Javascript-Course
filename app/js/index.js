/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Variables')
/* coding examples */


var name = "Reda";             // string
var age = 23;                  // number
var hasDriverLicence = true;   // Boolean
var empty = undefined;         // variable qui ne contient rien

log(name+" --> Type : "+typeof name);
log(age+" --> Type : "+typeof age);
log(hasDriverLicence+" --> Type : "+typeof hasDriverLicence);
log(empty+" --> Type : "+typeof empty);
