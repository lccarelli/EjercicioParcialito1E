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
	let articulo;
	let categoria;
	let precio;
	let bandera = 0;

	let articuloMax;
	let precioMax;
	let lacteo;
	let bebida = 0;
	let continuar;

	do {

		articulo = prompt("Nombre articulo");
		categoria = prompt("Nombre Categoria");
		precio = parseFloat(prompt("Nombre Precio"));

		if (precio < 0 || precio > 1000) {
			bandera = 1;
		}

		if (precio >= precioMax || bandera == 0) {

			console.log("entre!");
			console.log(precio, precioMax);

			console.log("entre a mayor");

			precioMax = precio;
			articuloMax = articulo;

			console.log("precioMax-> ", precioMax, "nombre->", articuloMax);

			switch (categoria) {
				case LACTEOS:
					if (precio > precioMax) {
						lacteo = articulo;
						console.log("lacteo->", lacteo);
					}
					break;
				case BEBIDAS:
					bebida++;
					console.log("cantidadBebidas-> ", bebida);
					break;
			}

		} else {

			alert("el precio se encuentra fuera del scope");
		}

		continuar = prompt("Quiere ingresar otro articulo?, continuar si");

	} while (continuar === SI);

	document.write(
		"Articulo con mayor precio -> ", articuloMax, "</b>",
		"Nombre categoria lacteo -> ", lacteo, "</b>",
		"Cantidad de articulos de bebidas -> ", bebida
	);

}