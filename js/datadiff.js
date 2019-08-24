function datediff(){
    var joiningdate = new Date(2018, 7, 16 , 0, 0, 0, 0);
    var currdate = new Date();
    var tot_month = Math.ceil((currdate - joiningdate)/(1000*60*60*24*30))
    var year = Math.floor(tot_month/12);
    var month = tot_month % 12;
    return [year, month];
}
var val = datediff();
document.getElementById("diff").innerHTML = "Duration: "+val[0]+" year "+val[1]+" months";
