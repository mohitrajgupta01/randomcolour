let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3= document.querySelector("h3");
    let randomcolor =getrandomcolour();
    h3.innerText= randomcolor;

    let div=document.querySelector("div");
    div.style.background=randomcolor;

});
function getrandomcolour(){

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let colour=`rgb(${red},${blue},${green})`;
    return colour;


}