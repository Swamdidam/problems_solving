// var string = 'qwertyuiop0098'
// if(string.startsWith('qw')){
//     console.log("true");
// }
// else{
//     console.log('false')
// }
// if(string.endsWith('90')){
//     console.log('wrong');
// }
// else{
//     console.log('correct')
// }

//to indicate where the counting should start
//=============================================//

// string.startsWith('qw', 3)
// this means couting starts from after three spaces


people = [
    {name: 'Mary', gender: 'girl'},
    {name: 'Paul', gender: 'boy'},
    {name: 'John', gender: 'boy'},
    {name: 'Lisa', gender: 'girl'},
    {name: 'Bill', gender: 'boy'},
    {name: 'Maklatura', gender: 'girl'}
]

var numBoys = people.reduce(function (n, person) {
    return n + (person.gender == 'boy');
}, 0);

console.log(numBoys);