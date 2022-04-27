// Constructor de producto
class Producto {    
    constructor(nombre, categoria, precio, codigo, stock) {
        this.nombre = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio = parseFloat(precio).toFixed(2);
        this.codigo = codigo.toUpperCase();
        this.stock = parseInt(stock);
    }
}

// Declaración de array vacío para los productos que ingresará el usuario
let productosNuevos = [];

// Declaración de productos existentes
let productoExistente1 = new Producto("Perfume Meira", "Eau de perfum", "1599,99", "ALQ-01", 50);
let productoExistente2 = new Producto("Remera Maywa", "Energy Life", "1299,99", "EL-02", 28);

// Declaración de array con productos existentes
let listaVieja = [productoExistente1, productoExistente1];

// Declaración de nuevos productos por el usuario
// Producto 1
alert("Ingrese los datos de su nuevo producto #1.")

let entradaNombre1 = prompt("Ingrese el nombre del producto #1:");
let entradaCategoria1 = prompt("Ingrese la categoría del producto #1:");
let entradaPrecio1 = prompt("Ingrese el precio del producto #1:");
let entradaCodigo1 = prompt("Ingrese el código del producto #1:");
let entradaStock1 = prompt("Ingrese el stock del producto #1:");

let producto1 = new Producto(entradaNombre1, entradaCategoria1, entradaPrecio1, entradaCodigo1, entradaStock1);

productosNuevos.push(producto1);
console.log(productosNuevos.concat(listaVieja));

// Producto 2
alert("Ingrese los datos de su nuevo producto #2.")

let entradaNombre2 = prompt("Ingrese el nombre del producto #2:");
let entradaCategoria2 = prompt("Ingrese la categoría del producto #2:");
let entradaPrecio2 = prompt("Ingrese el precio del producto #2:");
let entradaCodigo2 = prompt("Ingrese el código del producto #2:");
let entradaStock2 = prompt("Ingrese el stock del producto #2:");

let producto2 = new Producto(entradaNombre2, entradaCategoria2, entradaPrecio2, entradaCodigo2, entradaStock2);

productosNuevos.push(producto2);
console.log(productosNuevos.concat(listaVieja));

// Producto 3
alert("Ingrese los datos de su nuevo producto #3.")

let entradaNombre3 = prompt("Ingrese el nombre del producto #3:");
let entradaCategoria3 = prompt("Ingrese la categoría del producto #3:");
let entradaPrecio3 = prompt("Ingrese el precio del producto #3:");
let entradaCodigo3 = prompt("Ingrese el código del producto #3:");
let entradaStock3 = prompt("Ingrese el stock del producto #3:");

let producto3 = new Producto(entradaNombre3, entradaCategoria3, entradaPrecio3, entradaCodigo3, entradaStock3);

productosNuevos.push(producto3);
console.log(productosNuevos.concat(listaVieja));