
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    seguroSalud();
})

function seguroSalud() {
    let edad = parseInt(inputEdad.value) * 950
    alert (inputNombre.value + " el costo estimado mensual de su Póliza Seguro Salud será de $ " + edad + "(CLP)");
    numeroFecha();
}

function numeroFecha() {
    let hoy = new Date()
    const numeroCotizacionRandom = () => {
      return Math.round( Math.random() * 800 )
    }
    
    alert (inputNombre.value + ' su Nº de propuesta es el: ' + numeroCotizacionRandom() + ' y será válida por 10 días a contar del '+ hoy.toLocaleDateString() + '.' + ' Gracias por Preferirnos.');

    window.location.href = "http://127.0.0.1:5500/"; 
}
