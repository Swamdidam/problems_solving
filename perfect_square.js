(function perf(num){
    var x = Math.sqrt(num)
    // console.log(x)

    var x2 = x.toString();
    // var x3 = x2.split(".").pop();
    
    if(x2.includes(".")){
        console.log("true")
    }
    

    // console.log(x3)
})(15)