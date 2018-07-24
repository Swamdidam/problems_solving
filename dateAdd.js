// function date(n){
// var someDate = new Date();
// var numberOfDaysToAdd = n;
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

// var dd = someDate.getDate();
// var mm = someDate.getMonth() + 1;
// var y = someDate.getFullYear();

// var someFormattedDate = dd + '/'+ mm + '/'+ y;

// console.log(someFormattedDate)
// }
// date(9)

function getTranDate(){
    var someDate = new Date();
    // var numberOfDaysToAdd = n;
    someDate.setDate(someDate.getDate() + 282); 
    
    var dd = someDate.getDate();
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();
    
    var someFormattedDate = dd + '/'+ mm + '/'+ y;
    console.log(someFormattedDate)
    return someFormattedDate
    }

    getTranDate()