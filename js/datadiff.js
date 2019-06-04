function datadiff(){
    var joiningdate = new Date(2018, 7, 16 , 0, 0, 0, 0);
    var currdate = new Date();
    return Math.ceil((currdate - joiningdate)/(1000*60*60*24*30*12));
}
document.getElementById("diff").innerHTML = "Duration: "+datadiff()+" year";