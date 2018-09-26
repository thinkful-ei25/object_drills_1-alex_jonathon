'use strict';

function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name: name,
    nickName: nickName,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(this.name + ' is a ' + this.race + ' from '+ this.origin + '.');
    },
    evaluateFight: function(character) {
      let attack = 0;
      if (this.attack > character.defense) {
        attack = this.attack - character.defense;
      } 
      console.log('Your opponent takes ' + this.attack + ' damage and you recieve '+ character.attack + ' damage.');
    }
  }
}

let characters = [
  ['Gandalf the White', 'gandalf' , 'Wizard' , 'Middle Earth' , 10 , 6], 
  ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1], 
  ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2], 
  ['Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8], 
  ['Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5]
];

let statArr= [];

for (let i = 0; i < characters.length; i++) {
  statArr.push(createCharacter(characters[i][0], characters[i][1], characters[i][2], characters[i][3], characters[i][4], characters[i][5]));
}

console.log(statArr);


