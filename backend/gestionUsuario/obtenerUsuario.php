<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

  $conn = include_once '../bd.php';

  $consulta = $conn->prepare("SELECT * FROM tb_empleado;");

  try{
    $resultado=$consulta->execute(); 

    if($resultado){
      $response=$consulta->fetchAll();

      if($response){
        echo json_encode($response);
      }else{
        exit("Usuarios no existentes");
      }
    }
  }catch(Exception $e){
    echo $e;
    exit("Error al buscar usuarios");
  }



?>