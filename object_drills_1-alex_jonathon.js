function createMyObject() {
  const obj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      console.log('hello');
    } 
  }

  return obj;
}

let test = createMyObject();
console.log(test);