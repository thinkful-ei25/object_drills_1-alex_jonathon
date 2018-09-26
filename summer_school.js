let students = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students){
    length = students.length;
    for(let i = 0; i < length; i++){
        students[i].status = "In Summer School";
    }
    return students;
}

students = enrollInSummerSchool(students);
console.log(students);