function switchInputPasswordMode(button){
    let containerElements = button.parentNode.parentNode;
    let input = containerElements.getElementsByClassName('inputLogin');

    if(input[0].type == "password"){
        input[0].type = "text";
        button.value = "Ocultar";
    }else{
        input[0].type = "password";
        button.value = "Mostrar";
    }
}

// check form login
function checkFormLogin(){
    let valueUsername = document.getElementById('inputUsername').value;
    let valuePassword = document.getElementById('inputPassword').value;
    let issues = [];

    // Check user
    if(!isMail(valueUsername)){
        let responseFunction = verifyLength(valueUsername, 3, 250);
        if(responseFunction != ""){
            issues.push("El usuario ingresado " + responseFunction);
        }
    }else{
        let responseFunction = verifyLength(valueUsername, 6, 300);
        if(responseFunction != ""){
            issues.push("El correo ingresado " + responseFunction);
        }
    }

    // Check password
    let responseFunctionPassword = verifyLength(valuePassword, 6, 400);
    if(responseFunctionPassword != ""){
        issues.push("El campo contraseña " + responseFunctionPassword);
    }

    return issues;
}

// check form signin
function checkFormSignin(){

    let valueUserEmail = document.getElementById('inputUserEmail').value,
        valueUserPassword = document.getElementById('inputUserPassword').value,
        valueUserPasswordVerify = document.getElementById('inputUserPasswordVerify').value,
        valueUsername = document.getElementById('inputUsername').value,
        valueUserLastname1 = document.getElementById('inputUserLastname1').value,
        valueUserLastname2 = document.getElementById('inputUserLastname2').value;
    let issues = [];

    // Check email
    if(!isMail(valueUserEmail)){
        issues.push("El formato del correo ingresado no es válido");
    }else{
        let responseFunction = verifyLength(valueUserEmail, 5, 300);
        if(responseFunction != ""){
            issues.push("El correo ingresado " + responseFunction);
        }
    }

    // Check password
    let responseFunctionPassword = verifyLength(valueUserPassword, 6, 400);
    if(responseFunctionPassword != ""){
        issues.push("El campo contraseña " + responseFunctionPassword);
    }

    // Check password verify
    let responseFunctionPasswordVerify = verifyLength(valueUserPasswordVerify, 6, 400);
    if(responseFunctionPasswordVerify != ""){
        issues.push("El campo repetir contraseña " + responseFunctionPasswordVerify);
    }

    // check if password == passwordVerify
    if(responseFunctionPasswordVerify === "" && responseFunctionPassword === ""){
        if(valueUserPassword != valueUserPasswordVerify){
            issues.push("Las contraseñas no coinciden");
        }
    }

    // Check user
    let responseFunctionUsername = specialCharacters(valueUsername);
    if(responseFunctionUsername != ""){
        issues.push("No se admiten los cáracteres: " + responseFunctionUsername + " en el campo nombre");
    }else{
        let responseFunctionUsernameL = verifyLength(valueUsername, 3, 250);
        if(responseFunctionUsernameL != ""){
            issues.push("El campo nombre " + responseFunctionUsernameL);
        }
    }

    // Check userLastname1
    let responseFunctionLastname1 = specialCharacters(valueUserLastname1);
    if(responseFunctionLastname1 != ""){
        issues.push("No se admiten los cáracteres: " + responseFunctionLastname1 + " en el campo primer apellido");
    }else{
        let responseFunctionLastname1L = verifyLength(valueUserLastname1, 3, 150);
        if(responseFunctionLastname1L != ""){
            issues.push("El campo primer apellido " + responseFunctionLastname1L);
        }
    }

    // Check userLastname2
    let responseFunctionLastname2 = specialCharacters(valueUserLastname2);
    if(responseFunctionLastname2 != ""){
        issues.push("No se admiten los cáracteres: " + responseFunctionLastname2 + " en el campo segundo apellido");
    }else{
        let responseFunctionLastname2L = verifyLength(valueUserLastname2, 3, 150);
        if(responseFunctionLastname2L != ""){
            issues.push("El campo segundo apellido " + responseFunctionLastname2L);
        }
    }

    return issues;
}

function verifyLength(textString, minimumLength, maximumLength){
    let error = "";
    const stringLength = textString.length;
    if(textString === "" || stringLength === 0){
        error += "está vacío";
    }else if(stringLength < minimumLength){
        error += "es muy corto";
    }else if(stringLength > maximumLength){
        error += "es muy largo";
    }
    return error;
}

function isMail(textString){
    const expression = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    let email = textString;
    let trueEmail = true;

    if (!expression.test(email)){
        trueEmail ^= true;
    }
    return trueEmail;
}

function specialCharacters(textString){
    const validCharactersString = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNñÑoOpPqQrRsStTuUvVwWxXyYzZáéíóúüïöäë ";
    let character = "";
    let invalidCharacters = [];
 
     for(i = 0; i < textString.length; i++){
        character = textString.charAt(i);
         if(validCharactersString.indexOf(character)==-1){
            invalidCharacters.push(character);
         }
     }
 
     return invalidCharacters;
}