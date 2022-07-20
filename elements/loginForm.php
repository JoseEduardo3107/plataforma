<div class="containerLogin">
    <div class="layoutLogin">
        <div class="layoutBlock logoImage">
            <img src="resource/img/LogoPNG.png" class="logoLogin unselectableText" alt="Logo">
        </div>
        <div class="layoutBlock logoText unselectableText">
            <h2><span>Mi</span>Portal</h2>
        </div>
    <form method="post" autocomplete="off" id="formTest">
            <div class="layoutBlock blockInput">
                <label class="unselectableText">
                    Correo ó nombre de usuario
                </label>
                <input type="text" class="inputLogin" name="username">
            </div>
            <div class="layoutBlock blockInput">
                <label class="unselectableText">
                    Contraseña
                </label>
                <div class="inputBox">
                    <div class="inputContainer">
                        <input type="password" class="inputLogin" id="inputPassword" name="password">
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



<?php


    // conectar a la base de datos
    


   // if(conectarDBO::conexion()){
   //     echo '<script>newToastMessage("Correcto", "Conectado a la base de datos", "green", 3000)</script>';
  //  }



?>



<script src="../js/login.js">
</script>