'use strict';

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  return person;
}
let obj = personMaker();
console.log(obj.fullName());