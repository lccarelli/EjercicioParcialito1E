/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	const SI = "si";
	let precioAnterior;
	let catAnterior;

	do {

		let articulo = prompt("Nombre articulo");
		let categoría = prompt("Nombre Categoria");
		let precio = parseFloat(prompt("Nombre Precio"));


		if (precio > anterior) {

			anterior = precio;

		}

		let continuar = prompt("Quiere ingresar otro articulo?, continuar si");
	} while (continuar === SI);
	alert("Hola Mundo");
}