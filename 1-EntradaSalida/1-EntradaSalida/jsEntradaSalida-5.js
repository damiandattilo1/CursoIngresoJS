/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

    // Pido memoria para guardar la edad y el nombre
    var nombre;
    var edad;
    
    // Cargar las variables con los datos que ingreso el usuario
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    // Muestro la informacion formateando la cadena solicitada
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

