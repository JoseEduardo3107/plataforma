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