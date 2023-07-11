const producto = [
    {nombre: "huevos", precio: 50 },
    {nombre: "harina", precio: 50 },
    {nombre: "pan", precio: 55 },
    {nombre: "gaseosa", precio: 70 },
    {nombre: "cerveza", precio: 90 },
    {nombre: "carne", precio: 150 },
];

let carrito = []

let seleccion = prompt("hola desea comprar algun producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo")
}


if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = producto.map(
        (producto) => producto.nombre + " " + producto.precio + "$")
        alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por su visita, hasta luego!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto")
    let precio = 0

    if(producto == "harina" || producto == "huevos" || producto == "pan" || 
    producto == "gaseosa" || producto == "cerveza" || producto == "carne" ){
        switch(producto) {
            case "harina":
                precio = 50;
                break;
            case "huevos":
                precio = 50;
                break;
            case "pan":
                precio = 55;
                break;
            case "gaseosa":
                precio = 70;
                break;
            case "cerveza":
                precio = 90;
                break;
            case "carne":
                precio = 150;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades desea llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no disponemos de ese producto")
    }

    seleccion = prompt("quiere seguir comprando?")
    
    while(seleccion == "no"){
        alert("gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal}, unidades: ${carritoFinal.unidades}, 
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total de su compra es: ${total}`)
