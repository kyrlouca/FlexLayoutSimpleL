/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */

var b1= document.querySelector('#b1');
var t1=document.querySelector('#t1');
t1.addEventListener('change',changed);
b1.addEventListener('click',show);


function changed(e){
    var d1=document.querySelector('#d1');
    d1.innerHTML=e.target.value;
}
function show(){
    var t1=document.querySelector('#t1');
    var d1=document.querySelector('#d1');
    alert(t1.value);
    d1.innerHTML=t1.value;
}