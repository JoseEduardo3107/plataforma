
function switchInputPasswordMode(){
    let buttonSwitch = document.getElementById('buttonSwitchInput');
    let inputPassword = document.getElementById('inputPassword');

    //buttonSwitch.value = "Ocultar";

    if(inputPassword.type == "password"){
        inputPassword.type = "text";
        buttonSwitch.value = "Ocultar";
    }else{
        inputPassword.type = "password";
        buttonSwitch.value = "Mostrar";
    }

}