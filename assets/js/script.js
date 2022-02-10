/* Creation of the <p> tag */
const para = document.createElement("p");
const pNode = document.createTextNode("0");
para.appendChild(pNode);
para.id="counter";
const element = document.getElementById("container");
element.appendChild(para);

/* Creation of the buttons*/
const divB = document.createElement("div");
const btAdd = document.createElement("button");
const btSub = document.createElement("button");

divB.appendChild(btSub);
divB.appendChild(btAdd);
element.appendChild(divB);
divB.className="buttons";

btAdd.className="button";
btAdd.type="button";
btAdd.innerText="+1";

btSub.className="button";
btSub.type="button";
btSub.innerText="-1";

/*Count functions*/
btAdd.addEventListener("click",function(){
   let count=parseInt(document.getElementById("counter").innerHTML);
   count++;
   document.getElementById("counter").innerHTML=count;
})

btSub.addEventListener("click",function(){
   let count=parseInt(document.getElementById("counter").innerHTML);
    count--;
    document.getElementById("counter").innerHTML=count;
})






