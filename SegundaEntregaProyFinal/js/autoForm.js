document.addEventListener("submit", (event)=> {
    event.preventDefault()
    seguroAutomotriz();
    guardarDatosCte();
})

function seguroAutomotriz() {
    let km2 = parseInt(inputKm.value) * 150
    //alert (inputNombre.value + " el costo estimado mensual de su Póliza Seguro Automotriz será de $ " + km2 + "(CLP)");
    cotizacionAuto.innerText = ("$ "+ km2 + " (CLP)");
    numeroFecha();
}

function numeroFecha() {
    let hoy = new Date()
    const numeroCotizacionRandom = () => {
      return Math.round( Math.random() * 800 )
    }
    //alert (inputNombre.value + ' su Nº de propuesta es el: ' + numeroCotizacionRandom() + ' y será válida por 10 días a contar del '+ hoy.toLocaleDateString() + '.' + ' Gracias por Preferirnos.');
    //window.location.href = "index.html"; 
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