let formularioPrueba = document.getElementById('formTest');

formularioPrueba.onsubmit = function(e){
    e.preventDefault();
    loginForm();
}

function loginForm(){
    const formData = new FormData(formularioPrueba);

// Sin JQuery

/*const xhr = new XMLHttpRequest();
xhr.open('POST', 'php/login.php', true);
xhr.addEventListener('load', e =>{
    if(e.target.readyState == 4 && e.target.status == 200){
        //Respuesta
    }
});
xhr.send(formData);*/

    // Con JQuery
    $.ajax({
        url: 'php/login.php',
        type: 'POST',
        dataType: 'html',
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }).done(function(respuesta){

        newToastMessage("Correcto", respuesta, "green", 5000);


    //  document.location.href = 'home.php';
        



    }).fail(function(e){
        newToastMessage("No se realizó la consulta", "Revisar código", "red", 6000);
        
    });
}