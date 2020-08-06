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
	const LACTEOS = "Lacteos";
	const BEBIDAS = "Bebidas";
	let precio;
	let categoria;
	let articulo;
	let lacteoArticulo;
	let cantBebidas;
	let continuar;

	do {

		let nArticulo = prompt("Nombre articulo");
		let nCategoría = prompt("Nombre Categoria");
		let nPrecio = parseFloat(prompt("Nombre Precio"));


		if (nPrecio > 0 && nPrecio < 1000) {

			if (nPrecio > precio) {

				precio = nPrecio;
				categoria = nCategoría;
				articulo = nArticulo;

				if (categoria === LACTEOS && nPrecio > nprecio) {
					lacteoArticulo = nArticulo;
				}
				if (categoria === BEBIDAS) {
					cantBebidas++;
				}
				continuar = prompt("Quiere ingresar otro articulo?, continuar si");
			}
		} else {
			alert("el precio se encuentra fuera del scope");
		}


	} while (continuar === SI);

	document.write(
		"Articulo con mayor precio -> ", articulo, "</b>",
		"Nombre categoria lacteo -> ", lacteoArticulo, "</b>",
		"Cantidad de articulos de bebidas -> ", cantBebidas
	)

}