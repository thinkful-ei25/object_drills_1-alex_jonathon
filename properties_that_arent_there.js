'use strict';

let objectCreator = function(name, jobTitle, boss){
  let randomObject = {
    name : name,
    jobTitle: jobTitle,
    boss: boss
  };
  return randomObject;
};


let arrayOfObjects = [];
let personArray = ['bob', 'alice', 'fred', 'joe', 'poppy'];
let jobArray = ['janitor', 'custodian', 'police officer', 'gamer', 'MAINTENANCE MAN!'];
let boss = 'bob';

for(let i = 0; i < 5; i++){
  arrayOfObjects[i] = objectCreator(personArray[i], jobArray[i], boss);
  if (personArray[i] === boss) {
    let owner = "doesn't report to anybody.";
    arrayOfObjects[i] = objectCreator(personArray[i], jobArray[i], owner)
  }
  
  console.log(`${arrayOfObjects[i].jobTitle} ${arrayOfObjects[i].name} reports to ${arrayOfObjects[i].boss}`);
}
