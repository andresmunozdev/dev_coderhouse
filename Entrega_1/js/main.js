
/* 

Alumno: Andrés Muñoz C.
Comisión 31650. 
Tutor: Luis Salinas.  
Profesor: Fernando Luna.

Entrega Desafío Simulador interactivo - CoderHouse

Desafío: Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto. 
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.

*/

//debugger;

let nombreCliente = prompt ("Ingrese su Nombre y Apellido" );
let tipoSeguro = prompt ("Ingrese Tipo Seguro a Cotizar: 'H' = Hogar / 'A' = Automotriz / 'S' = Salud " );


//Validar tipo de Seguro Ingresado y llamar a la función correspondiente

switch (tipoSeguro) {
  case 'H':
    console.log('El Tipo de Seguro Ingresado es Hogar'); 
    seguroHogar();
    break;
  case 'A':
    console.log('El Tipo de Seguro Ingresado es Automotriz');
    seguroAutomotriz();
    break;
  case 'S':
    console.log('El Tipo de Seguro Ingresado es Salud');
    seguroSalud();
    break;
    default:
    //console.log('Opción Ingresada no es válida, debe ingresar H, A, S (Hogar, Automotriz, Salud).');
    alert ('Opción Ingresada no es válida, debe ingresar H, A, S (Hogar, Automotriz, Salud).');
}


// Funciones por cada tipo de seguro

function seguroHogar() {
    alert("Ingresó al Cotizador Seguro Hogar");
    let m2 = prompt("Ingrese cantidad de M2 de su Vivienda: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza Seguro Hogar será de $ " + m2 * 47 + " (CLP)");
}
 
function seguroAutomotriz() {
    alert("Ingresó al Cotizador Seguro Automotriz");
    let km = prompt("Ingrese cantidad de KM's actual de su Auto: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza Automotriz para: " + km + " Kilómetros es de $ " + km * 86 + " (CLP)");
}

function seguroSalud() {
    alert("Ingresó al Cotizador Seguro Salud");
    let edad = prompt("Ingrese Edad: ");
    alert (nombreCliente + " el costo estimado mensual de su Póliza de Salud será de $ " + edad * 950 + " (CLP)");
}






