var lengthOfLastWord = (function(s){
  
   s = s.replace(/ +$/, "");
   
  var last = s.split(" ").pop();
  var length = last.length;

  if(length ==0){
      console.log(0);
  }
  else{
   console.log(length);
  }

   
})("")
