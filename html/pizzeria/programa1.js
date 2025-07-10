let boton= document.querySelector(".boton");
let boton2= document.querySelector("#boton2");
let estilo2= document.getElementById("boton2").style; 
let estilo1= document.getElementById("boton").style; 
let opaco= document.getElementById("fondo").style;
let titulo1= document.getElementById("titulo");
let titulo2= document.getElementById("titulo").style
let panel= document.getElementById("panel");
let panel2= document.getElementById("panel").style;
let pan= document.getElementById("pan");
let pan2= document.getElementById("pan").style;
let fondo= document.getElementById("fondo");
let fondo2= document.getElementById("fondo").style;
let h3= document.querySelector(".h3");
let h4= document.querySelector(".h4");
let h6= document.querySelector(".h6");
let cambio= document.querySelector(".cambio");
let t=0;
let a=panel.classList.replace("xd","header__container-panel");
/*let panel= document.getElementById("panel").style;*/
boton2.onclick = function(){
     estilo2.border = "solid 3px #fff";
    estilo1.border = "0";
    fondo.classList.replace("fondo__panel","fondoxd");
    fondo2.animationName = "0"; 
    setTimeout(()=>{
    cambio.src = "https://www.pizzamostra.com/chimbote/wp-content/uploads/2020/08/pastas-slide.png";
    h3.textContent = "#MiLasagna";
    h4.textContent = "Que más deseo...";
    h6.textContent = "En el mejor ambiente";    
    panel.classList.replace("header__container-panel","xd");
    panel2.animationName = "0";
    titulo1.classList.replace("titulos","tituloxd");
    titulo2.animationName = "0"; 
    pan.classList.replace("imagen-panel","panxd");
    pan2.animationName = "0"; 
    },450);
    
}
boton.onclick =function(){
    estilo1.border = "solid 3px #fff";
    estilo2.border = "0";
    fondo.classList.replace("fondoxd","fondo__panel");
    setTimeout(()=>{   
    cambio.src = "https://www.pizzamostra.com/chimbote/wp-content/uploads/2020/08/banner_ame.png";
    h3.textContent = "¡FELIZ!";
    h4.textContent = "Semana Santa";
    h6.textContent = "¡disfrutemos juntos!";
    panel.classList.replace("xd","header__container-panel");
    titulo1.classList.replace("tituloxd","titulos");
    pan.classList.replace("panxd","imagen-panel");
    },450);
    
 
}
 
