
/* 

Alumno: Andrés Muñoz C.
Comisión 31650 
Tutor: Luis Salinas  

Entrega desafío Complementario - CoderHouse

Desafío: Crear un algoritmo utilizando un ciclo
Se realiza algoritmo considerando que la escala de notas en Chile es de 1,0 a 7,0

Para efectos de prueba se deja alumno con nota menor a 4,0 reprobado, entre 4,0 y 4,9 Aprobado y puede dar examen de 
recuperación (opcional) para subir nota y sobre 5,0 queda aprobado.
*/


let cantNotas = parseInt(prompt ("Ingrese Cantidad de Notas a Promediar: "))
let acumuladorNota = 0;

for (let i = 0; i < cantNotas; i++) {
    let nota = parseFloat(prompt("Digite Nota: "+(i+1)))
    acumuladorNota+=nota
}

let promedio = acumuladorNota/cantNotas

console.log("El Promedio del Alumno es: ",promedio)

if ( promedio < 4.0 ) {
    console.error("Condición Academica: Alumno Reprobado")
} else if (promedio >=4.0 && promedio <=4.9 ){ 
    console.log ("Condición Academica: Alumno Aprobado, Puede Rendir Prueba de Recuperación (opcional)" )
} else if (promedio >=5.0){ 
    console.log ("Condición Academica: Alumno Aprobado, OK" )
}
