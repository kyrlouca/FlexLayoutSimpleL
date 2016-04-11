/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */

var b1= document.querySelector('#b1');
var in1=document.querySelector('#in1');
in1.addEventListener('change',changed);
b1.addEventListener('click',show);


function changed(e){
    var d1=document.querySelector('#d1');
    d1.innerHTML=e.target.value;
}
function show(){
    var in1=document.querySelector('#in1');
    var d1=document.querySelector('#d1');
    alert(in1.value);
    d1.innerHTML=in1.value;
}