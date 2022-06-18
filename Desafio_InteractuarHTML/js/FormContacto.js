
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    submitContacto();
})

function submitContacto() {
    alert (inputNombre.value + " su mensaje fue enviado. Gracias por Preferirnos");
    window.location.href = "http://127.0.0.1:5500/"; 
}



/*alert (inputNombre.value + " el costo estimado mensual de su Póliza Seguro Hogar será de $ " + m22 + "(CLP)");*/