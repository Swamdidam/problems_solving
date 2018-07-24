class EnhancedArray extends Array {
  find(where) {
    return this.reduce((a, e, i) => (where(e, i) ? a.concat(i) : a), []);
  }
}
   /*----Working with simple data structure (array of numbers) ---*/

//existing array
let myArray = [1, 3, 5, 5, 4, 5];

//cast it :
myArray = new EnhancedArray(...myArray);

//run
console.log(
   myArray.find((e) => e===5)
)
// ==============/*----Working with Array of complex items structure-*/==========//

// let arr = [{name: 'Ahmed'}, {name: 'Rami'},{name: 'Ahmed'},{name: 'Abdennour'}];

// arr= new EnhancedArray(...arr);


// console.log(arr.find((o) => o.name=='Ahmed'))
// console.log(arr.name=='Ahmed')


// //==================================================
// var arr = ["Nano","Volvo","BMW","Nano","VW","Nano"] 
// arr.reduce(function(a, e, i) {
//     if (e === 'Nano')
//         a.push(i);
//     console.log(a);
//      console.log(arr.Nano)
//     return a;
// }, []); 


//===================================================
// let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 1", value:"then", other: "those" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// (function getAllIndexes(arr, val) {
//     var indexes = [], i;
//     for(i = 0; i < arr.length; i++)
//         if (arr[i].name === val)
//             console.log(arr[i])
// })(arr, "string1")


//======================================================


// function search(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].name === nameKey) {
//             return myArray[i];
//         }
//     }
// }


// var array = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 1", value:"then", other: "those" },
//     { name:"string 2", value:"this", other: "that" }

// ];

// for(var i=0;i<array.length;i++){

// var resultObject = search("string 1", array);
// console.log(resultObject)
// }
//=========================================================



//========================================================

// let obj = arr.find(o => o.name === 'string 1');

// console.log(obj);

// var obj = objArray.find(function (obj) { return obj.id === 3; });