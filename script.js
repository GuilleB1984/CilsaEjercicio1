document.getElementById("datosFormulario").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var pais = document.getElementById("pais").value;
    var email = document.getElementById("email").value;

    // Expresión regular para validar que no haya números
    var noNumeros = /^[a-zA-Z\s]+$/;
    var emailValidacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Validar que nombre no contenga números
    if (!noNumeros.test(nombre)) {
        alert("El nombre no es válido.");
        event.preventDefault(); 
    }

    // Validar que apellido no contenga números
    if (!noNumeros.test(apellido)) {
        alert("El apellido no es válido.");
        event.preventDefault(); 
    }

    // Validar que país de residencia no contenga números
    if (!noNumeros.test(pais)) {
        alert("El país de residencia no es válido.");
        event.preventDefault(); 
    }

    // Validar email
    if (!emailValidacion.test(email)) {
        alert("El correo electrónico no es válido.");
        event.preventDefault(); 
    }
});

document.getElementById("AltoContraste").addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");

    if (document.body.classList.contains("alto-contraste")) {
        this.textContent = "Contraste Normal";
    } else {
        this.textContent = "Alto Contraste";
    }
});
