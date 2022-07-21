<?php
session_start();


$user = strip_tags(htmlspecialchars($_POST['userEmail']));
$userName = strip_tags(htmlspecialchars($_POST['userName']));
$userLastname1 = strip_tags(htmlspecialchars($_POST['userLastname1']));
$userLastname2 = strip_tags(htmlspecialchars($_POST['userLastname2']));
$password = strip_tags(htmlspecialchars($_POST['userPassword']));
$userPasswordVerify = strip_tags(htmlspecialchars($_POST['userPasswordVerify']));

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

            // crear nombre de usuario
            $DynamicUsername = "12345";

            $queryData = "INSERT INTO BASIC_USER_INFORMATION(USER_NAME_SYS, USER_NAME, USER_LAST_NAME1, USER_LAST_NAME2, USER_PASSWORD, USER_DATE_JOINED, EMAIL) VALUES (:user, :user_name, :user_lastname1, :user_lastname2, :user_password, now(), :user_email);";

            $responseSQL = conectarDBO::conexion()->prepare($queryData);
            $responseSQL->bindValue(":user", $DynamicUsername);
            $responseSQL->bindValue(":user_name", $userName);
            $responseSQL->bindValue(":user_lastname1", $userLastname1);
            $responseSQL->bindValue(":user_lastname2", $userLastname2);
            $responseSQL->bindValue(":user_password", $hash);
            $responseSQL->bindValue(":user_email", $user);

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