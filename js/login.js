let formSubmit = document.getElementById('formLogIn');

formSubmit.onsubmit = function(e){
    e.preventDefault();
    loginForm();
}

function loginForm(){
    const formData = new FormData(formSubmit);

    // Con JQuery
    $.ajax({
        url: 'php/login.php',
        type: 'POST',
        dataType: 'html',
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }).done(function(response){


        if(response != ""){
            newToastMessage("Error", response, "#DA3B3B", 5000);
        }else{
            window.location.replace("index.php");
        }


    }).fail(function(e){
        newToastMessage("No se realizó la consulta", "Revisar código", "red", 6000);        
    });
}