function chk(a,b,c){
    

var x = a.toString();
var y = b.toString();
var z = c.toString();


var a2 = x.slice(0,-1)
var b2 = y.slice(0,-1)
var c2 = z.slice(0,-1);

  a2 = a2 + '0';
  b2 = b2 + '0';
  c2 = c2 + '0';

var x2 = x - a2;
var y2 = y - b2;
var z2 = z - c2;

console.log(x2);
console.log(y2)
console.log(z2)

if(x2==y2 && y2==z2){
    console.log("same last digits");
}
else{
    console.log("not same digits");
}

}
chk(123450,340,50);