document.getElementById("datosFormulario").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    
    var emailValidacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    if (!emailValidacion.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        event.preventDefault(); 
    }
});
