<?php
$total = 0;
if (isset($_REQUEST["btnagregar"])) {
    $chk1 = isset($_POST['chk1']) ? $_POST['chk1'] : 0;
    $chk2 = isset($_POST['chk2']) ? $_POST['chk2'] : 0;
    $chk3 = isset($_POST['chk3']) ? $_POST['chk3'] : 0;
    $precio = isset($_POST['Precio']) ? $_POST['Precio'] : 0;
    $producto= isset($_POST['Producto']) ? $_POST['Producto'] : '';
    
    $total = $precio + $chk1 + $chk2 + $chk3;
    
    $_SESSION['producto'] = $producto;
    $_SESSION['precio'] = $precio;
    $_SESSION['extras']['Personalización'] = $chk1;
    $_SESSION['extras']['Alojamiento web'] = $chk2;
    $_SESSION['extras']['Administración web(1 mes)'] = $chk3;
    $_SESSION['total'] = $total;
}
?>