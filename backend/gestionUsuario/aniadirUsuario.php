<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    if(empty($_GET['nombre']) || empty($_GET['apellido']) || empty($_GET['email']) || empty($_GET['password']) 
       || empty($_GET['telefono']) ||empty($_GET['direccion']) || empty($_GET['estado'])){
        exit("Datos insuficientes");
    }

    $nombre=$_GET['nombre'];
    $apellido=$_GET['apellido'];
    $email=$_GET['email'];
    $password=$_GET['password'];
    $telefono=$_GET['telefono'];
    $direccion=$_GET['direccion'];
    $estado=$_GET['estado'];
    $rol=$_GET['rol'];

    $conn = include_once '../bd.php';

    $insert = $conn->prepare("INSERT INTO tb_empleado(nombre, apellido, email, password, telefono, direccion, rol) 
                                VALUES ('$nombre','$apellido','$email'," . 123 . ",'$telefono','$direccion', '$rol')");
    try{
        $resultado = $insert->execute();
        if($resultado){
            echo "Insertado Correctamente.";
        }else{
            echo "Error al insertar";
        }

    }catch(Exceptio $e){
        exit("Query failed");
    }































?>