'use strict';

var kids = prompt('How many kids?');
console.log('Number of kids:', kids);

var hats = prompt('How many hats?');
console.log('This many hats:', hats);

if(kids === '3' || kids === '4') {
  alert('You\'re right!');
};

if(kids === '3' && hats === '2') {
  alert('You\'re right again!');
};
