<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

  $conn = include_once '../bd.php';

  $consulta = $conn->prepare('SELECT * FROM tb_empelado');

  try{
    $resultado=$consulta->execute(); 

    if($resultado){
      $response=$consulta->fetchAll();

      if($response){
        echo json_encode($response);
      }else{
        exit("Usuario no encontrado");
      }
    }
  }catch(Exception $e){
    exit("Usuario no encontrado");
  }



?>