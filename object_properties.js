'use strict';

let object = {
  foo : 'foo',
  bar : 'bar',
  fum : 'bizz',
  quux : 'bang',
  spam : 'spam'
};

for (let elements in object){
  console.log(elements);
}