'use strict';

function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
  return {
    name: name,
    nickName: nickName,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function() {
      console.log(this.name + ' is a ' + this.race + ' from '+ this.origin + ' who uses ' + this.weapon + '.');
    },
    evaluateFight: function(character) {
      let attack = 0;
      if (this.attack > character.defense) {
        attack = this.attack - character.defense;
      } 
      console.log('Your opponent takes ' + this.attack + ' damage and you recieve '+ character.attack + ' damage.');
    }
  };
}

let statArr = [
  createCharacter('Gandalf the White', 'gandalf' , 'Wizard' , 'Middle Earth' , 10 , 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'string and Barrow Blade'), 
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'), 
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];
statArr.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 42, 42, 'Banhammer'));

statArr.find(function(element){
  if(element.nickName === 'aragorn'){
    //console.log(element.describe());
    return element;
  }
}).describe();

let hobbitArray = statArr.filter(function(element){
  return element.race === 'Hobbit';
});

let overpoweredArray = statArr.filter(function(element){
  return element.attack > 5;
});


