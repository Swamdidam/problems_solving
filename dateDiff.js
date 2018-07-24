// var date_diff_indays = function(date1, date2) {
// dt1 = new Date(date1);
// dt2 = new Date(date2);

// console.log(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())
// console.log(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())
// return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
// }
// console.log(date_diff_indays('05/31/2018', '09/10/2018'));
// // console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// var someDate = new Date();
// var numberOfDaysToAdd = 100;
// someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

// var dd = someDate.getDate();
// var mm = someDate.getMonth() + 1;
// var yyyy = someDate.getFullYear();

// var someFormattedDate =  '07/12/2018'// mm + '/'+ dd + '/'+ yyyy;

// console.log(someFormattedDate)

var LMP = "04/30/2018";
var date1 = new Date();
var date2 = new Date(LMP);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

var wk = diffDays % 7;
var wk2 = diffDays / 7;
wk2 = wk2.toString();
var wk3 = Math.round(('0.' + wk2.split('.').pop()) * 7)


console.log(diffDays + ' Days after LMP');
console.log(wk + " weeks " + wk3 + " days")
