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

// check form
function checkFormLogin(){
    let valueUsername = document.getElementById('inputUsername').value;
    let valuePassword = document.getElementById('inputPassword').value;
    let issues = [];

    // Check user
    if(!isMail(valueUsername)){
        let responseFunction = verifyLength(valueUsername, 5, 250);
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
    const validCharactersString = "0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNñÑoOpPqQrRsStTuUvVwWxXyYzZ._-@áéíóúüïöäë!¡¿?,()% ";
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