function closest(x,y){
    var t,z;
  
  if((Math.abs(x-100))<(Math.abs(y-100))){
  	console.log(x + " is closer to 100")
  }
  else if((Math.abs(x-100))==(Math.abs(y-100))){
    console.log("both "+ x +" and "+ y + " are equally close to 100")
  }
  else{
  	console.log(y + " is closer to 100")
  }
}
closest(101,99);