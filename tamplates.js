


let colors=["black","gray","rgb(44, 43, 43)"];

let tamplates=document.getElementsByClassName(".tam");

let i=0;

let switcher=()=>
{
    tamplates=document.body.style.backgroundColor=colors[i];
    i++;

};
setInterval(switcher,1000);



document.getElementById("demo").innerHTML = "Choose you Design <br /> Zgjidhni dizajnin q&#1105 d&#1105shironi";














