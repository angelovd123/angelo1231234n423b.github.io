<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/header-footer.css">
    <link rel="stylesheet" href="../css/servicios.css">
    <link rel="stylesheet" href="../css/detalle.css">
    <link rel="stylesheet" media="only screen and (max-width: 600px)" href="../css/mobile.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frijole&display=swap" rel="stylesheet">


    <script src="https://kit.fontawesome.com/f50883e21b.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
<?php
session_start();
include '../php/formulario.php';
?>
    <header class="header">
        <nav class="nave">
            <div class="logo">
                <div class="nombre">
                    <h1>ESCUADRÓN WEB</h1>
                </div>
                <div class="descripcion">| sitios web personalizados</div>
            </div>
            <div class="menu"><i class="fa-solid fa-bars"></i></div> 
            <ul id="lista">
                <li><a class="items-lista" href="../index.html">Inicio</a></li>
                <li><a class="items-lista" href="servicios.html">Servicios</a></li>
                <li><a class="items-lista" href="plantillas.html">Plantillas</a></li>
                <li><a class="items-lista" href="nosotros.html">Nosotros</a></li>
                <li><a class="items-lista" href="#cotizar">Contacto</a></li>
            </ul>
        </nav>          
    </header>
<div class="contenedor_detalle">
    <div class="imagen_detalle">
        <h2>Modelo HTML - CSS - JS - TIENDA DE ARTICULOS COLECCIONABLES</h2>
        <hr><br>
        <a href="tienda/index.html"fa-solid fa-eye></i> Demo en vivo</a>
        <div class="imagen">
            <img width="800px" height="410px" src="../imagenes/tienda.PNG" alt="">
        </div>
    </div>
    <div class="descripcion_detalle">
        <hr><br>
        <div class="precio">
            <b>Licencia Iliminatda</b>
            <b>S/.400</b>
        </div>
        <p>Elegir servicios extras</p>
        <form class="extras" method="post" action="detalletienda.php">
            <input type="hidden" value="Modelo HTML - CSS - JS - TIENDA DE ARTICULOS COLECCIONABLES" name="Producto">
            <div class="extras1">
                <div>
                    <input type="checkbox" name="chk1" value="70"><p>Personalización</p><p class="preci">S/.70</p>
                </div>
                <div>
                    <input type="checkbox" name="chk2" value="50"><p>Alojamiento web</p><p class="preci">S/.50</p>
                </div>
                <div>
                  <input type="checkbox" name="chk3" value="100"><p>Administración web(1 mes)</p><p class="precios">S/.100</p>
                  <input type="hidden" value="400" name="Precio">  
                </div> 
            </div> 
        <div class="botones_compra">
            <input type="submit" value="Añadir al carrito" name="btnagregar">
            <input type="submit" value="Suscribite y descargalo GRATIS">
        </div>
    </form>
        <div class="publicidad1">
            <b>Escuadrón Web</b> - Descargas ilimitadas por 
            <br>
            <b>$13.25USD/mes</b>
            <br><br>
               290k artículos | Uso comercial| Apoyo                 
        </div>
    </div>
</div>
<footer id="cotizar">
    <div class="footer-logo">
        
            <h1>ESCUADRÓN WEB</h1>
            <p>| sitios web personalizados</p> 
        
    </div>
    <div class="footer-legal">
        <p class="subtitulo"><b>Legales</b></p>
        <a href="">Política de privacidad</a>
        <a href="">Términos y condiciones</a>
        <a href="">Política de Cookies</a>
        <a href="">Política de términos y condiciones de contratación</a>
        <a href=""><i class="fa-solid fa-book-open"></i> Libro de reclamaciones</a>

    </div>
    <div class="footer-contacto">
        <p class="subtitulo"><b>Contacto</b></p>
        <a href="">+51921****</a>
        <a href="">****@panasweb.pe</a>
        <a href="">Av.Cambio Puente, Chimbote</a>
    </div>
    <div class="footer-redes">
        <p class="subtitulo"><b>Redes Sociales</b></p>
        <a href=""><i class="fa-brands fa-whatsapp"></i></a>
        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-tiktok"></i></a>  
    </div>
</footer>
<div class="footer-copyr">
    <div class="ruc">
        <P>
            ESCUADRÓN WEB PERU S.A.C. - RUC: ****  
        </P>
    </div>
    <div class="copy">
        <p>ESCUADRÓN WEB © 2023. Todos los derechos reservados.
        </p>
    </div>           
</div>
<script src="../js/plantilla.js"></script>
</body>
</html>
