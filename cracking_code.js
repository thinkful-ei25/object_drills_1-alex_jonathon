'use strict';

let cipher = {
  a : 2,
  b : 3,
  c : 4,
  d : 5
};

let codedMessage = 'craft block argon meter bells brown croon droop';

function decodeWord(word){
  let cipherNumber = cipher[word[0]];
  if(cipherNumber === undefined){
    return ' ';
  }
  return word[cipherNumber - 1];

}

function decode(sentence){
  let answer = '';
  let wordArray = sentence.split(' ');
  for(let i = 0; i < wordArray.length; i++){
    answer += decodeWord(wordArray[i]);
  }
  return answer;
}

let answer = decode(codedMessage);
console.log(answer);
