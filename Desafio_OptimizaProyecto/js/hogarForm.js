document.addEventListener("submit", (event)=> {
    event.preventDefault()
    seguroHogar();
    guardarDatosCte();
})

function seguroHogar() {
   //Validar que todos los campos tengan datos antes de calcular
    if (inputM2.value == "" || inputNombre.value == "" || inputTelefono.value == "" || inputEmail.value == ""){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe completar todos los campos del formulario'}) ;
     }   else {
        let m22 = parseInt(inputM2.value) * 890
        cotizacionHogar.innerText = ("$ "+ m22 + " (CLP)");
        numeroFecha();}
}

function numeroFecha() {
    let hoy = new Date()
    const numeroCotizacionRandom = () => {
      return Math.round( Math.random() * 800 ) 
    }
    cotizacionHogarPie.innerText = (`El Nº de propuesta es el: ${numeroCotizacionRandom()} y será válida por 10 días a contar del ${hoy.toLocaleDateString()}.\n Gracias por Preferirnos.`)  
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

