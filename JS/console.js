const producto = [
    {nombre: "pre-workout", precio: 50 },
    {nombre: "bcaa", precio: 50 },
    {nombre: "proteina", precio: 55 },
    {nombre: "while protein", precio: 70 },
    {nombre: "gold protein", precio: 90 },
    {nombre: "creatina", precio: 150 },
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

    if(producto == "pre-workout" || producto == "bcaa" || producto == "proteina" || 
    producto == "while protein" || producto == "gold protein" || producto == "creatina" ){
        switch(producto) {
            case "pre-workout":
                precio = 50;
                break;
            case "bcaa":
                precio = 50;
                break;
            case "proteina":
                precio = 55;
                break;
            case "while protein":
                precio = 70;
                break;
            case "gold protein":
                precio = 90;
                break;
            case "creatina":
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
