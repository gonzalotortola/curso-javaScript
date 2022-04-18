let continuar = true

while(continuar) {
    
    alert(".:: BIENVENIDO A E-COMMERCE ::.\n\nIngrese el nombre del producto para ver su precio:\n1. Remera\n2. Pantalón\n3. Musculosa\n4. Short\n\nPara salir ingrese: ESC");

    producto = prompt("Ingrese el nombre del producto:").toLowerCase();

    if(producto === "remera") {

        alert("El precio de la remera es de $2.199,99 de contado.");

    } else if(producto === "pantalon" || producto === "pantalón") {

        alert("El precio del pantalón es de $1.699,99 de contado.");

    } else if(producto === "musculosa"){

        alert("El precio de la musculosa es de $1.899,99 de contado.");

    } else if(producto === "short"){

        alert("El precio del short es de $1.299,99 de contado.");

    } else if(producto === "esc"){

        alert("Gracias por su visita.");
        continuar = false;

    } else {

        alert("Por favor, ingrese un nombre de producto válido.");
    }
}