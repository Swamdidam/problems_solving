function happy(num){
    num = num.toString()
    var num2 = (num.split(""))
    // console.log(num2)
if(num2!=1){
        ret= [];
    
        for (var i = 0, len = num.length; i < len; i++) {
            ret.push(Math.pow(num2[i],2));
        }
        var sqr = ret.reduce((a,b)=> a+b,0);
        // console.log(ret)
        console.log(sqr) 
    }
    
}
happy(123)