<?php
 header("Access-Control-Allow-Origin: http://localhost:4200");

 $conn = include_once '../bd.php';

 if(!isset($_GET['id'])){
    exit("Datos erroneos");
 }
 $id = $_GET['id'];
 $query = $conn->prepare('DELETE FROM tb_empleado WHERE id_empleado='.$id);
 $resultado = $conn->execute();

if(!$query){
   exit("Query failed"); 
}




?>