<?php

if(empty($_GET['id'])){ //Obtener empleados con id
    exit("Datos insuficientes");
}
  $id=$_GET['id'];
 
  $conn = include_once '../bd.php';

  $consulta = $conn->prepare('SELECT * FROM tb_empelado WHERE id_empleado=' . $id);

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