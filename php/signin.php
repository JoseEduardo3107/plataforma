<?php
session_start();

$user = strip_tags(htmlspecialchars($_POST['username']));
$password = strip_tags(htmlspecialchars($_POST['password']));
$passwordVerify = strip_tags(htmlspecialchars($_POST['passwordVerify']));

$errorMessage = "";

require('connection.php');
  /*    if (password_verify("password", $hash)) {
            $errorMessage .= 'La contraseña es válida!';
        } else {
            $errorMessage .= 'La contraseña no es válida.';
        }
*/


try{
    $queryUsers = "SELECT USER_NAME FROM basic_user_information WHERE USER_NAME = :userName OR EMAIL = :user_email;";
    $response = conectarDBO::conexion()->prepare($queryUsers);
    $response->bindValue(":userName", $user);
    $response->bindValue(":user_email", $user);
    $response->execute();
    $responseReturned = $response->rowCount();


    if($responseReturned != 0){
        $errorMessage .= "El usuario {$user} ya se encuentra registrado<br>";
    }else{
        


        $hash = password_hash($password, PASSWORD_DEFAULT);




        try{


            $queryData = "INSERT INTO basic_user_information(EMAIL, USER_PASSWORD, USER_DATE_JOINED) VALUES(:user_email, :user_password, now());";
            $responseSQL = conectarDBO::conexion()->prepare($queryData);


            $responseSQL->bindValue(":user_email", $user);
            $responseSQL->bindValue(":user_password", $hash);
            $responseSQL->execute();




        }catch(Exception $e){


        //  echo "Linea del error: " . $e->getLine();


            $errorMessage .= "Ocurrió un error al escribir los datos en la base";
        }









  

    }

}catch(Exception $e){
   /* echo "Linea del error: " . $e->getLine();
    echo "Error: " . $e->getMessage();*/
    $errorMessage .= "Error al conectar con el usuario<br>" . $e->getMessage();
}








/*
$errorMessage = var_dump($_POST);*/
echo $errorMessage;

?>