function clock(){
    var clockBody=document.getElementById("clockBody");
    var date=new Date().toLocaleTimeString();
    
    clockBody.innerHTML=date;
    
}
setInterval(clock,1000)