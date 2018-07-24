// var objArray = [
//     { id: 0, name: 'Object 0', otherProp: '321' },
//     { id: 1, name: 'O1', otherProp: '648' },
//     { id: 2, name: 'Another Object', otherProp: '850' },
//     { id: 3, name: 'Almost There', otherProp: '046' },
//     { id: 4, name: 'Last Obj', otherProp: '984' }
// ];

// passing(students, 90); // => ['rachel', 'alex'];

// function passing(students, t) {
//   var passingStudents = [];
//   for(var i = 0; i < students.length; i++) {
//     var eachStudent = students[i];
//     if(eachStudent.name == "alex") {
//       passingStudents.push(eachStudent.name);
//     }
//   }
//   console.log(passingStudents);
// }


var students = [
    {name:"john", sub:"maths",score:"56"},
    {name:"moses", sub:"maths",score:"98"},
    {name:"ali", sub:"physics",score:"56"},
    {name:"john", sub:"chem",score:"56"},
    {name:"mic", sub:"maths",score:"98"},
    {name:"john", sub:"physics",score:"56"}]



function list(students, t) {
var Students = [];
for(var i = 0; i < students.length; i++) {
var Student = students[i];
if(Student.name == "john") {
  Student.push(Student.name);
}
}
console.log(Students);
}