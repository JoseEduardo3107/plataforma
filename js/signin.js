let formSubmit = document.getElementById('formSignIn');

formSubmit.onsubmit = function(e){
    e.preventDefault();
    signinForm();
}


function signinForm(){
    const formData = new FormData(formSubmit);
    
    // Con JQuery
    $.ajax({
        url: 'php/signin.php',
        type: 'POST',
        dataType: 'html',
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }).done(function(response){


      /*  if(response != ""){*/
           //newToastMessage("Error", response, "#DA3B3B", 5000);
            newToastMessage("Respuesta", response, "aqua");
       /* }else{
            window.location.replace("index.php");
        }*/


    }).fail(function(e){
        newToastMessage("No se realizó la consulta", "Revisar código", "red", 6000);        
    });
}
