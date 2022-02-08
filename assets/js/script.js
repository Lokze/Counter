
function add(){
   let count=parseInt(document.getElementById("counter").innerHTML);
   alert(count);
   count++;
   alert(count);
   document.getElementById("counter").innerHTML=count;
}

function sub(){
    let count=parseInt(document.getElementById("counter").innerHTML);
    alert(count);
    count--;
    alert(count);
    document.getElementById("counter").innerHTML=count;
 }
 