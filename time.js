(function number(num){
    var num2 = num/60
//    console.log(num2);
    
    if(num%60 ==0){
        console.log(num2+" hours "+ 0+" minutes")
    }
    else if(num<1){
        console.log("value too small")
    }
    else{   
   var num3 = num2.toString();
//    console.log(num3)

    var dec = num3.split('.').pop();
    dec = '0.' + dec
    hour = num2 - dec;
    var time = num - hour*60;

    console.log(hour+" hour "+time+" minutes")
    }
})(120);