/*....................MENU...........*/
let titulo = document.querySelector(".titulo-promo");
let next = document.querySelector(".next");
let nav2 = document.getElementById("img-panel").style;
let menu = document.querySelector(".fa-bars")
let c=0; 
let l=0;
menu.onclick = function(){
    let lista = document.getElementById("lista")
   
    if (l==0) {
         lista.classList.add("menu2");
         l=l+1;
    }
    else if(l==1){
         lista.classList.remove("menu2");
         l=l-1;
    }
    


}
let deslizar = function() {

if (c==0) {
    titulo.textContent = "¡DESPEJA TUS DUDAS! PRIMERA ASESORIA GRATIS";
    c=c+1;
}
else if(c==1){
    titulo.textContent = " TÚ SITIO WEB IDEAL ¡SOLO AQUÍ!";
    c=c-1;
}     

}
setInterval(deslizar,5000);
/*....................MENU...........*/
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("fijo",window.scrollY>0 && window.scrollY<850);
    if(window.scrollY>0){
        nav2.top = "80px";
    }
    else if(window.scrollY==0){
        nav2.top = "0px";
    }
})