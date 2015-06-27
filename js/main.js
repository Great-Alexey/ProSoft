
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