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
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="mainContainer">



        <div class="containerLogin">


            <div class="layoutLogin">

                <div class="layoutBlock logoImage">
                    <img src="resource/img/LogoPNG.png" class="logoLogin unselectableText" alt="Logo">
                </div>

                <div class="layoutBlock logoText unselectableText">
                    <h2><span>Mi</span>Portal</h2>
                </div>

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
                    <input type="button" class="buttonSubmit" value="Iniciar sesión" onclick="newToastMessage('Error al conectar', 'No existen los archivos para iniciar sesión. Recargue o informe sobre algun error.', '#D54C4C', 6000);">
                </div>

                <div class="layoutBlock blockInput blockSupport unselectableText">
                    <span>
                        ¿Olvidaste la contraseña?
                    </span>
                </div>
                <div class="layoutBlock blockInput blockSupport unselectableText">
                    <span>
                        ¿Necesitas ayuda? Contáctanos
                    </span>
                </div>



            </div>


        </div>












    <div class="containerNotifications unselectableText" id="containerNotifications">
    </div>
    </div>
    <script src="js/main.js">
    </script>
</body>
</html>