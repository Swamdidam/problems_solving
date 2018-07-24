//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
this.f = 100;
var c;

var fahr = function(){
    fr = (9*c/5 + 32);

    console.log(fr);
};

var cel = function(){
    var f = 140;
    cl = (5*(f-32))/9;

    console.log(cl);
}();