'use strict';

let objectCreator = function(name, jobTitle){
  let randomObject = {
    name : name,
    jobTitle: jobTitle
  };
  return randomObject;
};

let arrayOfObjects = [];
let personArray = ['bob', 'alice', 'fred', 'joe', 'poppy'];
let jobArray = ['janitor', 'custodian', 'police officer', 'gamer', 'MAINTENANCE MAN!'];


for(let i = 0; i < 5; i++){
  arrayOfObjects[i] = objectCreator(personArray[i], jobArray[i]);
  console.log(arrayOfObjects[i]);
}