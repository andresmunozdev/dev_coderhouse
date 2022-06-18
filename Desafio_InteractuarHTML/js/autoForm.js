
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    seguroAutomotriz();
})

function seguroAutomotriz() {
    let km2 = parseInt(inputKm.value) * 86
    alert (inputNombre.value + " el costo estimado mensual de su Póliza Seguro Automotriz será de $ " + km2 + "(CLP)");
    numeroFecha();
}

function numeroFecha() {
    let hoy = new Date()
    const numeroCotizacionRandom = () => {
      return Math.round( Math.random() * 800 )
    }
    //let hnombre = inputNombre.value
    alert (inputNombre.value + ' su Nº de propuesta es el: ' + numeroCotizacionRandom() + ' y será válida por 10 días a contar del '+ hoy.toLocaleDateString() + '.' + ' Gracias por Preferirnos.');

    //alert (nombreCliente + ' su Nº de propuesta es el: ' + numeroCotizacionRandom() + ' y será válida por 10 días a contar del '+ hoy.toLocaleDateString() + 
    //'.' + ' Gracias por Preferirnos.');

    window.location.href = "http://127.0.0.1:5500/"; 
}


/*

function seguroAutomotriz() {
    let contenidoArraySeguroAutomotriz = arraySeguroAutomotriz.toString(); 
    alert("Ingresó al Cotizador Seguro Automotriz y sus opciones son: " + contenidoArraySeguroAutomotriz);
    let km = prompt("Ingrese cantidad de KM's actual de su Auto: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza Automotriz para: " + km + " Kilómetros es de $ " + km * 86 + " (CLP)");
}
*/