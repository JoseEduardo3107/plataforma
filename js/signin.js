let formSubmit = document.getElementById('formSignIn');

formSubmit.onsubmit = function(e){
    e.preventDefault();
    let issues = checkFormSignin();

    if(issues.length != 0){
        for(i = 0; i < issues.length; i++){
            newToastMessage("Revisar campos",  issues[i], "red", 4000);    
        }
    }else{
        signinForm();
    }
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
