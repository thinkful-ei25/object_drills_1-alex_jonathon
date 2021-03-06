'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let queryKey = Object.keys(query);
  let queryVal = Object.values(query);

  arr.forEach(function(element) {
    for (let i = 0; i< queryKey.length; i++) {
      console.log(queryVal[i]);
      if (queryVal[i] === element.id) {
        console.log(element);  
      } 
    }
  });
}

findOne(HEROES, { name: 'Captain America' });