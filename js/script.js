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

// ESCRIBIR EN HTML LOS PRODUCTOS EXISTENTES
let divProductosExistentes = document.getElementById("productosExistentes")
productosExistentes.forEach(productoEnArray => {
    divProductosExistentes.innerHTML += `
    <div class="productosExistentes">
        <p>Nombre: <strong>${productoEnArray.nombre}</strong></p>
        <p>Categoría: <strong>${productoEnArray.categoria}</strong></p>
        <p>Precio: <strong>$${productoEnArray.precio.toFixed(2)}</strong></p>
        <p>Código: <strong>${productoEnArray.codigo}</strong></p>
        <p>Stock: <strong>${productoEnArray.stock}</strong></p>
        <br>
    </div>
    `
})

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

// ESCRIBIR EN HTML LOS NUEVOS PRODUCTOS
let divProductosIngresados = document.getElementById("productosIngresados")
for (let producto of productosIngresados) {
    divProductosIngresados.innerHTML += `
    <div class="productosIngresados">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// ALERTA POCO STOCK
let pocoStock = nuevaListaDeProductos.filter(producto => ((producto.stock <= 3) && (producto.stock > 0)));
console.log("Productos con STOCK ESCASO: ");
console.log(pocoStock);

// EN HTML
let divPocoStock = document.getElementById("pocoStock")
for (let producto of pocoStock) {
    divPocoStock.innerHTML += `
    <div class="pocoStock">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// ALERTA SIN STOCK

let sinStock = nuevaListaDeProductos.filter(producto => producto.stock == 0 || producto.disponibilidad == false);
console.log("Productos sin stock:");
console.log(sinStock);

// EN HTML
let divSinStock = document.getElementById("sinStock")
for (let producto of sinStock) {
    divSinStock.innerHTML += `
    <div class="sinStock">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// BÚSQUEDA DE PRODUCTOS

let busqueda = prompt("Ingrese el producto que desee buscar:");
let resultadoBusqueda = nuevaListaDeProductos.filter((producto) => producto.nombre.includes(busqueda));
console.log("Resultado de búsqueda:")
console.log(resultadoBusqueda);

// EN HTML
let divBusqueda = document.getElementById("busquedaDeProductos")
for (let producto of resultadoBusqueda) {
    divBusqueda.innerHTML += `
    <div class="busquedaDeProductos">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// ORDENAR POR CANTIDAD STOCK
// MENOR A MAYOR
let ordenStockMenorAMayor = nuevaListaDeProductos;
ordenStockMenorAMayor.sort((a, b) => a.stock - b.stock);
console.log('Ordenados por stock: de menor a mayor: ');
console.log(ordenStockMenorAMayor);

// EN HTML
let divStockMenorAMayor = document.getElementById("stockMenorAMayor")
for (let producto of ordenStockMenorAMayor) {
    divStockMenorAMayor.innerHTML += `
    <div class="stockMenorAMayor">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// MAYOR A MENOR
let ordenStockMayorAMenor = nuevaListaDeProductos;
ordenStockMayorAMenor.sort((a, b) => b.stock - a.stock);
console.log('Ordenados por stock: de mayor a menor: ');
console.log(ordenStockMayorAMenor);

// EN HTML
let divStockMayorAMenor = document.getElementById("stockMayorAMenor")
for (let producto of ordenStockMayorAMenor) {
    divStockMayorAMenor.innerHTML += `
    <div class="stockMayorAMenor">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// ORDENAR POR PRECIO
// MENOR A MAYOR
let ordenPrecioMenorAMayor = nuevaListaDeProductos;
ordenPrecioMenorAMayor.sort((a, b) => a.precio - b.precio);
console.log('Ordenados por precio: de menor a mayor: ');
console.log(ordenPrecioMenorAMayor);

// EN HTML
let divPrecioMenorAMayor = document.getElementById("precioMenorAMayor")
for (let producto of ordenPrecioMenorAMayor) {
    divPrecioMenorAMayor.innerHTML += `
    <div class="precioMenorAMayor">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};

// MAYOR A MENOR
let ordenPrecioMayorAMenor = nuevaListaDeProductos;
ordenPrecioMayorAMenor.sort((a, b) => b.precio - a.precio);
console.log('Ordenados por precio: de mayor a menor: ');
console.log(ordenPrecioMayorAMenor);

// EN HTML
let divPrecioMayorAMenor = document.getElementById("precioMayorAMenor")
for (let producto of ordenPrecioMayorAMenor) {
    divPrecioMayorAMenor.innerHTML += `
    <div class="precioMayorAMenor">
        <p>Nombre: <strong>${producto.nombre}</strong></p>
        <p>Categoría: <strong>${producto.categoria}</strong></p>
        <p>Precio: <strong>$${producto.precio.toFixed(2)}</strong></p>
        <p>Precio <em>con IVA incluido:</em> <strong>$${(producto.sumarIVA()).toFixed(2)}</strong></p>
        <p>Precio sugerido: <strong>$${(producto.precioSugerido()).toFixed(2)}</strong></p>
        <p>Código: <strong>${producto.codigo}</strong></p>
        <p>Stock: <strong>${producto.stock}</strong></p>
        <br>
    </div>
    `
};