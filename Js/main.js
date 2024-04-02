//Declaracion de las variables
const precioArroz = 100;
const precioHarina = 200;
const precioAzucar = 1000;

let producto = parseInt(
	prompt(
		'Seleccione el producto que desea llevar\n1. Arroz\n2. Harina\n3. Azucar\n4. Salir'
	)
);
let cantidad = parseInt(prompt('¿Cuantos paquetes desea llevar?'));
let envio = parseInt(
	prompt(
		'¿Desea enviar este producto? El precio del envio es un 20% sobre el total de tu ticket.\n1. Si \n2. No'
	)
);
let resultado;

//Funciones
function calcularEnvio() {
	resultado * 1.2;
}

//Inicio del programa

switch (producto) {
	case 1:
		resultado = cantidad * precioArroz;
		alert(`El total de tu compra es $${resultado}.`);
		break;
	case 2:
		resultado = cantidad * precioHarina;
		alert(`El total de tu compra es $${resultado}.`);
		break;
	case 3:
		resultado = cantidad * precioAzucar;
		alert(`El total de tu compra es $${resultado}.`);
		break;
	case 4:
		break;
	default:
		alert('Opcion invalida');
		break;
}

if ((envio = 1)) {
	calcularEnvio();
	alert(`El total de tu canasta junto con el envio es ${resultado}`);
}
