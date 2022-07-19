<!DOCTYPE html>
<html lang="es-ES" charset="UTF-8">
<head>
    <title>Plataforma</title>
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
    <div class="containerNotifications unselectableText" id="containerNotifications">
    </div>
    <script src="js/toastNotifications.js">
    </script>
    <div class="mainContainer">



        <div class="containerLogin">


            <div class="layoutLogin">

                <div class="layoutBlock logoImage">
                    <img src="resource/img/LogoPNG.png" class="logoLogin unselectableText" alt="Logo">
                </div>

                <div class="layoutBlock logoText unselectableText">
                    <h2><span>Mi</span>Portal</h2>
                </div>


                <form action="" method="post">

                    <div class="layoutBlock blockInput">
                        <label class="unselectableText">
                            Correo ó nombre de usuario
                        </label>
                        <input type="text" class="inputLogin">
                    </div>

                    <div class="layoutBlock blockInput">
                        <label class="unselectableText">
                            Contraseña
                        </label>
                        <div class="inputBox">
                            <div class="inputContainer">
                                <input type="password" class="inputLogin" id="inputPassword">
                            </div>
                            <div class="inputContainer">
                                <input type="button" class="buttonSwitchInput" value="Mostrar" id="buttonSwitchInput" onclick="switchInputPasswordMode();">
                            </div>
                        </div>
                    </div>

                    <div class="layoutBlock blockInput">
                        <input type="submit" class="buttonSubmit" value="Iniciar sesión">
                    </div>



                </form>



            <?php

                require('php/connection.php');

                // conectar a la base de datos
                conectarDBO::conexion();

                // Error al cargar los estilos de fuente en: ToastNotification
                // Solucionar en el siguiente commit

            ?>











                <div class="layoutBlock blockInput blockSupport unselectableText">
                    <span>
                        ¿Olvidaste la contraseña?
                    </span>
                </div>
                <div class="layoutBlock blockInput blockSupport unselectableText">
                    <span>
                        Crear cuenta
                    </span>
                </div>
                <div class="layoutBlock blockInput blockSupport unselectableText">
                    <span>
                        ¿Necesitas ayuda? Contáctanos
                    </span>
                </div>



            </div>


        </div>



        <footer class="footer">
            <div class="informationSection">
                <div class="iconsFooter unselectableText">
                        <a href="link">
                            <span class="iconFooter">
                                <i class="fa-brands fa-instagram"></i>
                            </span>
                        </a>
                        <a href="link">
                            <span class="iconFooter">
                                <i class="fa-brands fa-whatsapp"></i>
                            </span>
                        </a>
                        <a href="link">
                            <span class="iconFooter">
                                <i class="fa-solid fa-phone"></i>
                            </span>
                        </a>
                        <a href="link">
                            <span class="iconFooter">
                                <i class="fa-solid fa-at"></i>
                            </span>
                        </a>
                </div>
            </div>
            <div class="textFooter">
                <p>&copy; Profesor. Carlos Ortiz Solis</p>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>


        





    
    </div>
    <script src="js/main.js">
    </script>
</body>
</html>