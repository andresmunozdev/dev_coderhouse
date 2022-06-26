
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    submitContacto();
    guardarDatosCte();
})

function submitContacto() {
    alert (inputNombre.value + " su mensaje fue enviado. Gracias por Preferirnos");
    window.location.href = "index.html"; 
}


function guardarDatos() {
    
    sessionStorage.setItem('tempNombres', inputNombre.value); 
    sessionStorage.setItem('tempTelefono', inputTelefono.value); 
    sessionStorage.setItem('tempEmail', inputEmail.value); 

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