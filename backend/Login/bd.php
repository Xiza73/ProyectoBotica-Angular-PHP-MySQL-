<?php
$server = "bnylrz2kdcpkhneftgj8-mysql.services.clever-cloud.com:20721";
$contrasenia = "vSw6Lg10TGN52oui0vW";
$usuario = "uwy8uzseqzphuwgl";
$nombre_bd = "bnylrz2kdcpkhneftgj8";
try{
    $conn = new PDO('mysql:host=$server;dbname=$nombre_bd;',$usuario,$contrasenia);
}catch(Exception $e){
    echo "Ocurrió algo con la base de datos: ".$e->getMessage();
}

?>