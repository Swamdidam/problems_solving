var tri = function(base,height){
    
        var area = 0.5*base*height;

        // console.log(area);
        return area;
        }(2,4);
    
var cube = function(y){
   
    var cb = y
    // console.log(cb);
     return cb;
}
cube(tri);
        

parseInt(function tri2(x,y){
    //var tr = x*y;
    console.log(x * y);
}(tri, cube))



