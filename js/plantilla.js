/*...............GENERAL...................*/
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let icon1= document.getElementById("icon1");
let venta = document.getElementById("icon2");
let restaurante = document.getElementById("icon3");
let empresa = document.getElementById("icon4");
let menu = document.querySelector(".fa-bars")
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
/*...............SELECTOR TODOS...................*/
let todo= document.querySelector(".todas");
todo.onclick = function(){

        icon1.classList.replace("fa-chevron-right","fa-chevron-up");
        venta.classList.replace("fa-chevron-up","fa-chevron-right");
        restaurante.classList.replace("fa-chevron-up","fa-chevron-right");
        empresa.classList.replace("fa-chevron-up","fa-chevron-right");
        item1.classList.remove("ocultar");
        item2.classList.remove("ocultar");
        item3.classList.remove("ocultar");
        item4.classList.remove("ocultar");
   
}
/*...............SELECTOR VENTAS...................*/
let ventas= document.querySelector(".plantillas-ventas");
ventas.onclick = function(){

        icon1.classList.replace("fa-chevron-up","fa-chevron-right");
        venta.classList.replace("fa-chevron-right","fa-chevron-up");
        item2.classList.remove("ocultar");
        item1.classList.add("ocultar");
        item3.classList.add("ocultar");
        item4.classList.add("ocultar");
        restaurante.classList.replace("fa-chevron-up","fa-chevron-right");
        empresa.classList.replace("fa-chevron-up","fa-chevron-right");
}

/*...............SELECTOR RESTAURANTES...................*/
let restaurantes= document.querySelector(".plantillas-restaurantes");
restaurantes.onclick = function(){
        icon1.classList.replace("fa-chevron-up","fa-chevron-right");
        restaurante.classList.replace("fa-chevron-right","fa-chevron-up");
        item1.classList.remove("ocultar");
        item2.classList.add("ocultar");
        item3.classList.add("ocultar");
        item4.classList.add("ocultar");
        venta.classList.replace("fa-chevron-up","fa-chevron-right");
        empresa.classList.replace("fa-chevron-up","fa-chevron-right");
}
/*...............SELECTOR EMPRESAS...................*/
let empresas= document.querySelector(".plantillas-empresas");
empresas.onclick = function(){
        icon1.classList.replace("fa-chevron-up","fa-chevron-right");
        empresa.classList.replace("fa-chevron-right","fa-chevron-up");
        item4.classList.remove("ocultar");
        item2.classList.add("ocultar");
        item3.classList.add("ocultar");
        item1.classList.add("ocultar");
        venta.classList.replace("fa-chevron-up","fa-chevron-right");
        restaurante.classList.replace("fa-chevron-up","fa-chevron-right");    
}


