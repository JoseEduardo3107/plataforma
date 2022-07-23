<?php

session_start();
header("Content-Type: text/html;charset=utf-8");

?>









<!DOCTYPE html>
<html lang="es-ES" charset="UTF-8">
<head>
    <title>Plataforma</title>
    <link rel="icon" href="resource/img/LogoPNG.png">
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <![endif]-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
    <meta charset="UTF-8">
    <meta lang="es-ES">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap" rel="stylesheet">
    <!-- fontawesome (Icon) -->
    <script src="https://kit.fontawesome.com/6711e9fd0f.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <div class="mainContainer">
    <div class="containerNotifications unselectableText" id="containerNotifications">
    </div>
    <script src="js/toastNotifications.js">
    </script>





        <?php

            if (empty($_SESSION['user'])){
               // echo "no estas registrado";
              //  die();
              //include('elements/loginForm.php');
              include('elements/signinForm.php');
            }else{

                        // panel de control
                ?>
                
                    <a href="elements/exitBtn.php">Cerrar Sesion</a>
                
                <?php

            }

        
        // LOGIN
            
        ?>






        <?php
        // FOOTER
            include('elements/footer.php');
        ?>

        





    
    </div>
    <script src="js/main.js">
    </script>
</body>
</html>