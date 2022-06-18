
document.addEventListener("submit", (event)=> {
    event.preventDefault()
    submitContacto();
})

function submitContacto() {
    alert (inputNombre.value + " su mensaje fue enviado. Gracias por Preferirnos");
    window.location.href = "http://127.0.0.1:5500/"; 
}
