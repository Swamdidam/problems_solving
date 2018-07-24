function fact(num){
    var str = "0"
    var factor = []
    for(i=2;i<num;i++){
        var num2 = num%i;
        if(num2 ==0){

            str = str +i;
            
            factor.push(i)
        }
        
    }
    str1 = str.substr(1) //This removes the initial --var str = "0" at line 2
    console.log(str1)
    console.log(factor)
}fact(30)
