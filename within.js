// var x = 45;
// if(x>20 && x<=100){
//     console.log('within')

function caps(str){
    str = str.split("");

    for(var i=0, x = str.length; i<x; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
       
    }

    // str1 = str.join("");
        
        return str.join(" ");
}
console.log(caps('we are here again'));
// console.log(str1)

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("W first letter of each word of a given string."));
