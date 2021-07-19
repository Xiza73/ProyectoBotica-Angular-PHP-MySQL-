<?php
    require_once realpath(__DIR__ . "/vendor/autoload.php");

    use Dotenv\Dotenv;

    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $server = $_ENV["SERVER"];
    $user = $_ENV["USER"];
    $pass = $_ENV["PASS"];
    $nombre_bd = $_ENV["BD"];

    // Conectando, seleccionando la base de datos
    /*$link = mysql_connect($server, $user, $pass)
    or die('No se pudo conectar: ' . mysql_error());
    echo 'Conectado a la Base de Datos';
    mysql_select_db($nombre_bd) or die('No se pudo seleccionar la base de datos');*/

    try{
        return new PDO('mysql:host=' . $server . ';dbname=' . $nombre_bd, $user, $pass);
    }catch(Exception $e){
        echo "Ocurrió algo con la base de datos: ".$e->getMessage();
    }
?>