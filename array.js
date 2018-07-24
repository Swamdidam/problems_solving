var students = [
    { name: 'john',  subject: 'phy', score: 50 },
    { name: 'moses', subject: 'phy', score: 90 },
    { name: 'john', subject: 'phy', score: 98 },
    { name: 'andrew', subject: 'math', score: 85 },
    { name: 'mary', subject: 'phy', score: 69 },
    { name: 'janice', subject: 'math', score: 98 },
    { name: 'john', subject: 'phy', score: 99 }
];


// using .filter() directly
var WithName = students.filter(function(item) {
    return item.name == 'john';
});

var total = WithName.filter(function(add){
    // var array = [];
    
    // for(var i=1;i<WithName.length;i++){
    //     var them = array[i]
    //     // array.push(add.score)
    //     // return array;
    
    console.log(add);
    
    
    return add.score;
    
})


// var total2 = total.filter(function(sum){
//     console.log(sum)

//     var arr = [];

//     arr.push(sum.score)
//     console.log(arr)

// })




/* doing the same thing, but extracting the filter function to another function
 *
 * @param arr - the array to be filtered
 * @param paramName - name to be filtered
 * @param paramSubject - subject to be filtered
 */
// function findStudentByName(arr, paramName, paramSubject) {

//     function findByName(element, index, array) {
//       if (paramName != null && paramSubject != null) {
//           return element.name == paramName && element.subject == paramSubject;
//       } else if (paramName != null) {
//           return element.name == paramName;
//       } else if (paramSubject != null) {
//           return element.subject == paramSubject;
//       }
//     }
    
//     return arr.filter(findByName);
// }

// // find all students with name 'john' using custom function
// console.log(findStudentByName(students, 'john'));

// // find all students with subject 'phy'
// // alert('Students with subject "phy": \n' + JSON.stringify(findStudentByName(students, null, 'phy')));

