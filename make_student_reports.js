'use strict';

const data = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentReport (data) {
  let arr = [];
  for (let i =0; i < data.length; i++) {
    arr.push(data[i].name + ' : ' + data[i].grade); 
  }
  return arr;
}

console.log(makeStudentReport(data));