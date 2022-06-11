
/* 
Alumno: Andrés Muñoz C.
Comisión 31650. 
Tutor: Luis Salinas.  
Profesor: Fernando Luna.

Primera Entrega del Proyecto Final

Formato: Archivos HTML
Objetivos del desafío: 
El estudiante deberá utilizar el tag correspondiente para asociar un script JS a una página HTML. En caso de contar con conocimientos previos en 
HTML y CSS puede plantear los elementos iniciales correspondientes a la interfaz del simulador.
Formato: Archivo JS
Objetivo del desafío:
El estudiante deberá codificar la funcionalidad inicial del simulador. Identificando el flujo de trabajo en el script en términos de captura de 
entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

+ Recomedación toLowerCase() 

*/

//debugger;

let nombreCliente = prompt ("Ingrese su Nombre y Apellido" );
let tipoSeguro =  prompt ("Ingrese Tipo Seguro a Cotizar: 'H' = Hogar / 'A' = Automotriz / 'S' = Salud " ).toLowerCase();

//Seguros Hogar --> Incendio - Sismo - Robo - Incendio + Sismo 
//Seguros Automotriz --> Perdida Total - Robo - Perdida Total + Robo
//Seguros Salud --> Ambulatorio - Hospitalario - Farmacia - Ambulatorio + Farmacia 


//ARRAY con tipos de seguros.

const arraySeguroHogar = ['Incendio','Sismo','Robo'];
const arraySeguroAutomotriz = ['Perdida Total','Robo'];
const arraySeguroSalud = ['Ambulatorio','Hospitalario','Farmacia','Ambulatorio y Farmacia'];



//Validar tipo de Seguro Ingresado y llamar a la función correspondiente

switch (tipoSeguro) {
  case 'h':
    console.log('El Tipo de Seguro Ingresado es Hogar'); 
    console.log(arraySeguroHogar);
    seguroHogar();
    numeroFecha();
    break;
  case 'a':
    console.log('El Tipo de Seguro Ingresado es Automotriz');
    console.log(arraySeguroAutomotriz);
    seguroAutomotriz();
    numeroFecha();
    break;
  case 's':
    console.log('El Tipo de Seguro Ingresado es Salud');
    console.log(arraySeguroSalud);
    seguroSalud();
    numeroFecha();
    break;
    default:
    //console.log('Opción Ingresada no es válida, debe ingresar H, A, S (Hogar, Automotriz, Salud).');
    alert ('Opción Ingresada no es válida, debe ingresar H, A, S (Hogar, Automotriz, Salud).');
}


// Funciones por cada tipo de seguro

function seguroHogar() {
    let contenidoArraySeguroHogar = arraySeguroHogar.toString(); 
    alert ("Ingresó al Cotizador Seguro Hogar y sus opciones son: " + contenidoArraySeguroHogar);
    let m2 = prompt("Ingrese cantidad de M2 de su Vivienda: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza Seguro Hogar será de $ " + m2 * 47 + " (CLP)");
}
 
function seguroAutomotriz() {
    let contenidoArraySeguroAutomotriz = arraySeguroAutomotriz.toString(); 
    alert("Ingresó al Cotizador Seguro Automotriz y sus opciones son: " + contenidoArraySeguroAutomotriz);
    let km = prompt("Ingrese cantidad de KM's actual de su Auto: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza Automotriz para: " + km + " Kilómetros es de $ " + km * 86 + " (CLP)");
}

function seguroSalud() {
    let contenidoArraySeguroSalud = arraySeguroSalud.toString(); 
    alert("Ingresó al Cotizador Seguro Salud y sus opciones son: " + contenidoArraySeguroSalud);
    let edad = prompt("Ingrese Edad: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza de Salud será de $ " + edad * 950 + " (CLP)");
}


// Funcion Numero Random + Obtener Fecha Actual
function numeroFecha() {
  let hoy = new Date()
  const numeroCotizacionRandom = () => {
    return Math.round( Math.random() * 800 )
  }
  alert (nombreCliente + ' su Nº de propuesta es el: ' + numeroCotizacionRandom() + ' y será válida por 10 días a contar del '+ hoy.toLocaleDateString() + 
  '.' + ' Gracias por Preferirnos.');
}