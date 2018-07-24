var students = [
  {
    name: 'corey',
    score: 89
  },
  {
    name: 'rachel',
    score: 95
  },
  {
    name: 'alex',
    score: 91
  }
];

passing(students, 90); // => ['rachel', 'alex'];


function passing(students, t) {
  var passingStudents = [];
  for(var i = 0; i < students.length; i++) {
    var eachStudent = students[i];
    if(eachStudent.name == "alex") {
      passingStudents.push(eachStudent.name);
    }
  }
  console.log(passingStudents);

}