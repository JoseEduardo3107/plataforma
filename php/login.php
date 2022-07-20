<?php
session_start();

$user = strip_tags(htmlspecialchars($_POST['username']));
$password = strip_tags(htmlspecialchars($_POST['password']));
$errorMessage = "";

require('connection.php');

try{
    $queryUsers = "SELECT * FROM basic_user_information WHERE USER_NAME = :userName;";
    $response = conectarDBO::conexion()->prepare($queryUsers);
    $response->bindValue(":userName", $user);
    $response->execute();
    $responseReturned = $response->rowCount();

    if($responseReturned != 0){
        $responseData = $response->fetch(PDO::FETCH_ASSOC);
        $_SESSION['user'] = $responseData['USER_NAME'];
    }else{
        $errorMessage .= "El usuario {$user} no existe<br>";
    }

}catch(Exception $e){
   /* echo "Linea del error: " . $e->getLine();
    echo "Error: " . $e->getMessage();*/
    $errorMessage .= "Error al conectar con el usuario<br>" . $e->getMessage();
}

echo $errorMessage;