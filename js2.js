//Geolocalizacion
function iniciar(){
	var boton=document.getElementById('obtener');
	boton.addEventListener('click', obtener, false);
}
function obtener(){
	//Declaramos el método getCurrentPosition()
	//el cual es a su vez un método del objeto 'geolocation'
	//y geolocation es parte del nuevo objeto 'navigator'
	//'mostrar' es la funcion que recibe el objeto 'Position'
	navigator.geolocation.getCurrentPosition(mostrar, errores);	
}

//Cuando el método getCurrentPosition() es llamado, un nuevo objeto Position
//es creado con la información de la ubicación actual del usuario y es enviado
//a la función mostrar().
function mostrar(posicion){
	//Referenciamos el elemento ubicación del HTML, y lo almacenamos en la variable
	//de JS llamada ubicacion (despues cambiaremos el botón por la variable 'datos')
	var ubicacion = document.getElementById('ubicacion');

	//Creamos la variable datos
	var datos = '';

	//Almacenamos los valores obtenidos del atributo 'coords' del objeto 'Position'
	datos += 'Latitud: '+posicion.coords.latitude+'<br>';
	datos += 'Longitud: '+posicion.coords.longitude+'<br>';
	datos += 'Exactitud: '+posicion.coords.accuracy+'mts.<br>'; 
	ubicacion.innerHTML = datos;
}

function errores(error){
	//En caso de que ocurra un error, esto enviara una alerta indicando el código y mensaje
	//Esto solo para fines didacticos
	alert('Error: '+error.code+' '+error.message);
}

//Tambien podiamos tomar acciones con base a los errores de manera individual
	//function errores(error.PERMISSION_DENIED){
		//código
	//}

window.addEventListener("load", iniciar, false);