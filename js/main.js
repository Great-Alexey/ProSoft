
var a = $('nav a');
function active(){
    var b = $('main > div');
    for(i=0;i<a.length;i++){
        if(a[i]===this){
            a[i].className='active';
            b[i].style.display='block';
        }
        else{
            a[i].className=' ';
            b[i].style.display='none';
        }
}
}
for(i=0;i<a.length;i++){
    a[i].addEventListener("click", active, false);
}
$(document).ready(function(){   
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thuesday","Friday","Sutarday"];
var  newDate = new Date();
newDate.setDate(newDate.getDate());
 $('#date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
setInterval(function(){
    var seconds = new Date().getSeconds();                                      
    if(seconds<10){
    seconds="0"+seconds;
    }
    var minutes = new Date().getMinutes();
    if(minutes<10){
    minutes="0"+minutes;
    }
    var hours = new Date().getHours();
    if(hours<10){
    hours="0"+hours;
    }
    $('#time').html(hours +':'+ minutes +':'+ seconds) ;
}, 1000);
});
