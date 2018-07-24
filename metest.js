var pDate = new Date();
var pDay = pDate.getDay()+1;
var pMonth = pDate.getMonth()+1;
var pYear = pDate.getFullYear();

if(pDay<10){
    pDay = '0'+ pDay
}
if (pMonth < 10){
    pMonth = '0' + pMonth;
}



pDate = pDay + '/' +pMonth +'/'+pYear;
console.log(pDate);