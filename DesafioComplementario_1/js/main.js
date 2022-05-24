
/* 
Entrega desafío Complementario 
Desafío: Crear un algoritmo utilizando un ciclo
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
    console.log ("Condición Academica: Alumno Aprobado, Puede Rendir Prueba de Recuperación" )
} else if (promedio >=5.0){ 
    console.log ("Condición Academica: Alumno Aprobado, OK" )
}
