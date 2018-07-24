function date(n, t){
    var someDate = new Date();
    var numberOfDaysToAdd = n;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
    
    var dd = someDate.getDate() + t;
    var newDD;
    var week;
    
    var week = dd/7;
    console.log(week +" week");
    var wk = week.toString()
    console.log(wk +" wk");
    var week1 = wk.split('.').pop();
    week1 = '0.' + week1;
    
    week4 = week1 * 7
    
    console.log(week1 +" week1");
    var week3 = wk - week1;
    console.log(week3 +" week3")
    
        newDD = dd % 7;
        console.log(newDD)
        // return newDD 
    
    var mm = someDate.getMonth() + 1;
    var y = someDate.getFullYear();
    
    var someFormattedDate = dd + '/'+ mm + '/'+ y;
    
    console.log(someFormattedDate)
    console.log(dd)
    }
    date(0, 15)