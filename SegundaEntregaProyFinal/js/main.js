/* 
Alumno: Andrés Muñoz C.
Comisión 31650. 
Tutor: Luis Salinas.  
Profesor: Fernando Luna.

Estructura inicial del Simulador
Formato: Página HTML y  código fuente en JavaScript. Debe identificar el apellido del estudiante en el nombre de archivo comprimido por “claseApellido”

Objetivos del desafío: 
El estudiante deberá utilizar el tag correspondiente para asociar un script JS a una página HTML. 
Construir la interfaz inicial del simulador, definiendo elementos destinados a la captura de entradas (formularios, inputs y/o botones) 
y secciones en el HTML para la notificación de salidas 


Script del Simulador
Formato: Archivo JS
Objetivo del desafío:
El estudiante deberá codificar las funcionalidades mínimas del simulador. Identificando el flujo de trabajo en el script en términos 
de captura de entradas y eventos de usuario, funciones de procesos esenciales y notificación de resultados en forma de salida por HTML, 
modificando el DOM.
En caso de requerir un volumen de información estàtica significante, el estudiante deberá emplear objetos literales y/o parseo JSON,
tanto para obtener como para almacenar datos.



Comentarios indicados en la devolución anterior: Adecuaciones 

1.- Tene cuidado como estas usando las rutas a los href le colocar /automotriz.html y esa barra no va, pq estan el mismo nivel, yo me preguntaba que es 
este error que me aparece en la consola y me di cuenta que eran las rutas de los html.
2.- Con respecto a main.js solo tenes dos variables que les colocas el titulo con innertex, bueno imagino que mas adelante ira toda la logica ahi, nada veremos.
3.- Otra cosa que usas en las funciones que disparan los form es esto window.location.href = "http://127.0.0.1:5500/";  que eso da error, fijate como solucionar eso.
4.- Las funciones estan correctas.
5.- Los eventos estan correctos mas alla que haya errores.

1.- Se actualizan rutas de los href
2.- Se reubicarán esas variables ya que la lógica irá en cada js según tipo de seguro (siguiente version)
3.- Se adecuan los windows.location.href se comentan para cumplir con la rubrica
4.- OK N/A
5.- OK N/A 


*/


titulo.innerText = "SEGUROS GENERALES ANDY CODER"
slogan.innerText = "Tu Compañia de Seguros muy Segura"

