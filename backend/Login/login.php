<?php

require 'bd.php';

if(!empty($_POST['email']) && !empty($_POST['password'])){
  $email=$_POST['email'];
  $contrasenia=$_POST['password'];
  session_start();
  $_SESSION['email']-$usuario;

  $consulta="SELECT*FROM tb_cliente WHERE email='$email' and password='$contrasenia' ";
  $resultado=mysqli_query($conexion,$consulta);

  $filas=mysqli_num_rows($resultado);

  if($filas){
      header("location:bd.php"); //poner pagina de ingreso
  }else{
    echo "<h1>Usuario no existe o datos invalidos</h1>";
  }
  mysqli_free_result($resultado);
  mysqli_close($conexion);

}else{
    echo "<h1>llene el formulario</h1>";
}

?>