<?php session_start();?>
<h3> <?php echo $_SESSION['producto'];?></h3>
<b>Licencia iliminada:</b><b><?php echo $_SESSION['precio'] ;?></b>
<table border="1">
<?php
if (isset($_SESSION['extras'])) {
foreach ($_SESSION['extras'] as $indice => $valor) {
    if ($valor != 0) { 
        echo "<tr><td>".$indice."</td><td>".$valor."</td><tr><br>";
    }
  
    }
}
    ?>  
</table>
<h3>Total de la compra:</h3><h2><?php echo $_SESSION['total'];?></h2>
<a href="index_carrito.php">Regresar</a>