<?php
session_start();

$user = strip_tags(htmlspecialchars($_POST['username']));
$password = strip_tags(htmlspecialchars($_POST['password']));
$errorMessage = "";

require('connection.php');

try{
    $queryUsers = "SELECT USER_NAME_SYS FROM basic_user_information WHERE USER_NAME_SYS = :userName OR EMAIL = :user_email;";
    $response = conectarDBO::conexion()->prepare($queryUsers);
    $response->bindValue(":userName", $user);
    $response->bindValue(":user_email", $user);





    $response->execute();
    $responseReturned = $response->rowCount();

    if($responseReturned != 0){
        $responseData = $response->fetch(PDO::FETCH_ASSOC);
        $_SESSION['user'] = $responseData['USER_NAME_SYS'];
    }else{
        $errorMessage .= "El usuario {$user} no existe<br>";
    }

}catch(Exception $e){
   /* echo "Linea del error: " . $e->getLine();
    echo "Error: " . $e->getMessage();*/
    $errorMessage .= "Error al conectar con el usuario<br>" . $e->getMessage();
}

echo $errorMessage;