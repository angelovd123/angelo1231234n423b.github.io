let cuentaBtn = document.getElementById("cuenta");
let pause = document.getElementById("pause");
let nextsBtn = document.getElementById("nexts");
let antesBtn = document.getElementById("antes");
let imgchange = document.getElementById("imgchange");
let titulo = document.querySelector('#zona');
let contador = document.querySelector('#contador');
let play = document.getElementById("play").style;
let stop = document.getElementById("stop").style;
let zonaBtn = document.getElementById("zona").style;
let miImagen = "imagen1";   
let a = "inicio";


let deslizar = nextsBtn.onclick = function() {        
    if (miImagen == "imagen1") {    
        imgchange.src = "https://i.ytimg.com/vi/167ks8Y4Qpw/maxresdefault.jpg";
        miImagen = "imagen2";
        titulo.textContent = 'ZONA SH FIGUARTS';
        zonaBtn.width="400px";
        contador.textContent = '2/3';
        
    }
    else if (miImagen == "imagen2") {
        imgchange.src = "https://i.ytimg.com/vi/O3W2US0Hdb4/maxresdefault.jpg";
        miImagen = "imagen3";
        titulo.textContent = 'ZONA FIGMA';
        zonaBtn.width="270px";
        contador.textContent = '3/3';
    }
    else{
        imgchange.src = "https://i.ytimg.com/vi/rYyN49_24mQ/maxresdefault.jpg";
        miImagen = "imagen1";
        titulo.textContent = 'ZONA MYTH CLOTH EXCLAMATION';
        zonaBtn.width="710px";
        contador.textContent = '1/3';
    }
    
}
antesBtn.onclick = function() {        
    if (miImagen == "imagen2") {    
        imgchange.src = "https://i.ytimg.com/vi/rYyN49_24mQ/maxresdefault.jpg";
        miImagen = "imagen1";
        titulo.textContent = 'ZONA MYTH CLOTH EXCLAMATION';
        zonaBtn.width="710px";
        contador.textContent = '1/3';  
        
    }
    else if (miImagen == "imagen3") {
        imgchange.src = "https://i.ytimg.com/vi/167ks8Y4Qpw/maxresdefault.jpg";
        miImagen = "imagen2";
        titulo.textContent = 'ZONA SH FIGUARTS';
        zonaBtn.width="400px";
        contador.textContent = '2/3';  
    }
    
}
   
    let t=setInterval(deslizar,3000);
    
    pause.onclick = function(){
        if (a == "inicio") {
            clearInterval(t);
           a="final";
           play.display="inline-block";
           stop.display="none"
        }   
         else if (a == "final"){
            t=setInterval(deslizar,3000);
            a="inicio";
            stop.display="inline-block";
           play.display="none"
         }
         
    }
    
/*  -------------CARRUSEL DE IMAGENES-----------
let antesBtn= document.querySelector('#antes');
let nextsBtn= document.querySelector('#nexts');
let slider = document.querySelector('#slider');


nextsBtn.onclick = function() {
           slider.scrollLeft += 1500;

        }
        antesBtn.onclick = function() {
            slider.scrollLeft -= 1500;
 
         }      */