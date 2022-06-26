
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    submitContacto();
    guardarDatosCte();
})

function submitContacto() {
    if (inputConsulta.value == "" || inputNombre.value == "" || inputTelefono.value == "" || inputEmail.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe completar todos los campos del formulario'}) ;
    } else{
        Swal
            .fire({
                title: "Sus Datos fueron Enviados",
                text: "Muchas Gracias por Preferirnos",
                icon: 'success',
                //showCancelButton: true,
                confirmButtonText: "Aceptar",
                //cancelButtonText: "Cancelar",
            })
            .then(resultado => {
                if (resultado.value) {
                    // Hicieron click en "Sí"
                    //console.log("*se elimina la venta*");
                    window.location.href = "index.html"; 
                };
            })
    }   
}

function guardarDatosCte() {
    const datosCte = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value
    } 
    let str = JSON.stringify(datosCte)
    localStorage.setItem("datosCte", str)
}

function recuperarDatosCte() {
    if (localStorage.getItem("datosCte")) {
            const datosDeUsr = JSON.parse(localStorage.getItem("datosCte"))
                  inputNombre.value = datosDeUsr.nombre
                  inputTelefono.value = datosDeUsr.telefono
                  inputEmail.value  = datosDeUsr.email
        }    
}

recuperarDatosCte()