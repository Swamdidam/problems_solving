checkdata: [{
    type: Array,
    value: [{
        name: 'Bike',
        no: 1,
    }, 
    {
        name: 'Car',
        no: 2,
    },
     {
        name: 'Cycle',
        no: 3,
    }, 
    {
        name: 'Bus',
        no: 4,
    }, {
        name: 'Truck',
        no: 5,
    }],
}],

checkall = (function(val) {
    var checkvalue = this.checkdata;
    var checktext = [];
    for (i = 0; i < checkvalue.length; i++) {
        var checkarray = {
            vehiclename: checkvalue[i].name,
            vehiclenumber: checkvalue[i].no,
                };
        if (checkvalue[i].checked == true) {
            checktext.push(checkarray);
        }
    }
    this.checkeditem = checktext.vehiclename;
    console.log(checktext);
    })(Truck)