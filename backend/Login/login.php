<?php
  header("Access-Control-Allow-Origin: http://localhost:4200");

  if(empty($_GET['user']) || empty($_GET['password'])){
    exit("Datos insuficientes");
  }
  $username=$_GET['user'];
  $password=$_GET['password'];
  //session_start();
  //$_SESSION['email']-$usuario;

  $conn = include_once '../bd.php';

  $consulta = $conn->prepare('SELECT * FROM tb_usuario WHERE id_usuario=' . $username . ' AND pass=' . $password);

  try{
    $resultado=$consulta->execute(); //boolean

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