const reverseStr = str => {
   
    var spliter = str.split("");
   
    var backward = spliter.reverse(); 
   
    var bind = backward.join(""); 
    
    console.log(bind);
}
 
reverseStr("asdfghjkl;");

