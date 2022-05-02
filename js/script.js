class Producto {
    constructor(nombre, categoria, precio, codigo, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        if (this.categoria == 1) {
            this.categoria = "Urban";
        } else if(this.categoria == 2) {
            this.categoria = "Energy Life";
        } else if(this.categoria == 3) {
            this.categoria = "Cosmetica";
        } else if(this.categoria == 4) {
            this.categoria = "Perfumeria";
        }
        this.precio = parseFloat(precio);
        this.codigo = codigo.toUpperCase();
        this.stock = parseInt(stock);
        this.disponibilidad = true;
    }

    sumarIVA() {
        return this.precio * 1.21;
    }

    vender() {
        this.disponibilidad = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}

let producto1 = new Producto("Musculosa Amarilla", 2, "1590", "EL-58", 2);
let producto2 = new Producto("Pantalón Negro", 1, "2999", "U-05", 0);
let producto3 = new Producto("Perfume Red Seduction", 4, "1780", "P-01", 20);

productosExistentes = [producto1, producto2, producto3];

productosIngresados = [];

continua = true
while (continua) {
    let validador = prompt("Ingrese el nombre del producto a añadir o ingrese 'FIN' para finalizar.")
    if (validador === "FIN" || validador === "fin" || validador === "Fin") {
        continua = false;
    } else {
        nombreProducto = validador;
        let categoriaProducto = parseInt(prompt("Ingrese el número según la categoría del producto:\n1. Urban\n2. Energy Life\n3. Cosmética\n4. Perfumeria"))
        let precioProducto = prompt("Ingrese el precio del producto añadido.");
        let codigoProducto = prompt("Ingrese el código del producto añadido.");
        let stockProducto = prompt("Ingrese la cantidad de stock del producto añadido.");
        productosIngresados.push(new Producto(nombreProducto, categoriaProducto, precioProducto, codigoProducto, stockProducto));
    }
}

nuevaListaDeProductos = productosExistentes.concat(productosIngresados);

console.log(nuevaListaDeProductos);

for (let producto of productosIngresados) {
    alert("PRODUCTO AÑADIDO >");
    alert("Nombre: "+ producto.nombre +"\nCategoría: "+ producto.categoria +"\nPrecio: $"+ producto.precio +"\nPrecio (con IVA incluido): $"+ (producto.sumarIVA()).toFixed(2) +"\nPrecio sugerido para la venta: $"+ producto.precioSugerido().toFixed(2) +"\nCódigo: "+ producto.codigo +"\nStock: "+ producto.stock +"");
};

for (let producto of productosExistentes) {
    alert("PRODUCTO EXISTENTE >");
    alert("Nombre: "+ producto.nombre +"\nCategoría: "+ producto.categoria +"\nPrecio: $"+ producto.precio +"\nPrecio (con IVA incluido): $"+ (producto.sumarIVA()).toFixed(2) +"\nPrecio sugerido para la venta: $"+ producto.precioSugerido().toFixed(2) +"\nCódigo: "+ producto.codigo +"\nStock: "+ producto.stock +"");
};

// ALERTA POCO STOCK

let pocoStock = nuevaListaDeProductos.filter(producto => ((producto.stock <= 3) && (producto.stock > 0)));
console.log("Productos con STOCK ESCASO: ");
console.log(pocoStock);

for (let producto of pocoStock) {
    alert("Productos con stock escaso (menos de 3 unidades):");
    alert("PRODUCTOS CON STOCK ESCASO:\n\nNombre: "+ producto.nombre +"\nCategoría: "+ producto.categoria +"\nCódigo: "+ producto.codigo +"\nStock: "+ producto.stock +"");
};

// ALERTA SIN STOCK

let sinStock = nuevaListaDeProductos.filter(producto => producto.stock == 0 || producto.disponibilidad == false);
console.log("Productos sin stock:");
console.log(sinStock);

for (let producto of sinStock) {
    alert("Productos sin stock / sin disponibilidad:");
    alert("Productos sin stock\n\nNombre: "+ producto.nombre +"\nCategoría: "+ producto.categoria +"\nCódigo: "+ producto.codigo +"");
};

// BÚSQUEDA DE PRODUCTOS

let busqueda = prompt("Ingrese el producto que desee buscar:");
let resultadoBusqueda = nuevaListaDeProductos.filter((producto) => producto.nombre.includes(busqueda));
console.log("Resultado de búsqueda:")
console.log(resultadoBusqueda);
for (let producto of resultadoBusqueda) {
    alert("Resultado de búsqueda:\n\nNombre: "+ producto.nombre +"\nCategoría: "+ producto.categoria +"\nPrecio: $"+ producto.precio +"\nPrecio (con IVA incluido): $"+ (producto.sumarIVA()).toFixed(2) +"\nPrecio sugerido para la venta: $"+ producto.precioSugerido().toFixed(2) +"\nCódigo: "+ producto.codigo +"\nStock: "+ producto.stock +"");
};

// ORDENAR POR CANTIDAD STOCK
// MENOR A MAYOR
let ordenStockMenorAMayor = nuevaListaDeProductos;
ordenStockMenorAMayor.sort((a, b) => a.stock - b.stock);
console.log('Ordenados por stock: de menor a mayor: ');
console.log(ordenStockMenorAMayor);

// MAYOR A MENOR
let ordenStockMayorAMenor = nuevaListaDeProductos;
ordenStockMayorAMenor.sort((a, b) => b.stock - a.stock);
console.log('Ordenados por stock: de mayor a menor: ');
console.log(ordenStockMayorAMenor);

// ORDENAR POR PRECIO
// MENOR A MAYOR
let ordenPrecioMenorAMayor = nuevaListaDeProductos;
ordenPrecioMenorAMayor.sort((a, b) => a.precio - b.precio);
console.log('Ordenados por precio: de menor a mayor: ');
console.log(ordenPrecioMenorAMayor);

// MAYOR A MENOR
let ordenPrecioMayorAMenor = nuevaListaDeProductos;
ordenPrecioMayorAMenor.sort((a, b) => b.precio - a.precio);
console.log('Ordenados por precio: de mayor a menor: ');
console.log(ordenPrecioMayorAMenor);