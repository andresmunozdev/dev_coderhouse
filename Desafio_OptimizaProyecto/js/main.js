/* 
Alumno: Andrés Muñoz C.
Comisión 31650. 
Tutor: Luis Salinas.  
Profesor: Fernando Luna.

>> Consigna: Optimizarás tu proyecto final a través de la puesta en práctica de lo visto en esta clase según sea conveniente en cada caso.

>>Aspectos a incluir en el entregable:
Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y simplifícalas utilizando operador ternario u operadores 
lógicos AND y OR.
Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.


**Actualizaciones en esta entrega**
Se eliminan imagenes del banner no utilizadas
Se eliminan lineas de código antiguo y sus comentarios 
Se unifican archivos con variables en main.js 
Se adpta index y se arrega gráfica
Se crea nuevo formulario de contacto con apoyo de libreria bootstrap 
Se corrige los JS de cada HTML (eliminando los JS vacios)
Se renombra JS de HTML Hogar (antes mainform ahora hogarForm para mantener nombres consistentes)
*/

//vienen de variablesForm.js 
const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const inputM2 = document.querySelector("#inputM2")
const inputKm = document.querySelector("#inputKm")
const inputEdad = document.querySelector("#inputEdad")
const btnSubmit = document.querySelector("#submit")
const submitContacto = document.querySelector("#submitContacto")
const inputConsulta = document.querySelector("#inputConsulta")

//vienen de variables.js
const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const cotizacionAuto = document.getElementById("cotizacionAuto")
const cotizacionHogar = document.getElementById("cotizacionHogar")
const cotizacionSalud = document.getElementById("cotizacionSalud")
const cotizacionAutoPie = document.getElementById("cotizacionAutoPie")
const cotizacionHogarPie = document.getElementById("cotizacionHogarPie")
const cotizacionSaludPie = document.getElementById("cotizacionSaludPie")
const datosEnviados = document.getElementById("datosEnviados")

//ARRAY con tipos de seguros.
const arraySegurosMenu = ['Seguros Hogar', 'Seguros Automotriz', 'Seguros Salud', 'Formulario Contacto'];
const arraySeguroHogar = ['Incendio','Sismo','Robo'];
const arraySeguroAutomotriz = ['Perdida Total','Robo'];
const arraySeguroSalud = ['Ambulatorio','Hospitalario','Farmacia','Ambulatorio y Farmacia'];

titulo.innerText = "SEGUROS GENERALES ANDY CODER"
slogan.innerText = "Tu Compañia de Seguros muy Segura"



