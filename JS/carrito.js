const producto = [
    {codigo: 1, nombre: "pre-workout", precio: 50 },
    {codigo: 2, nombre: "bcaa", precio: 50 },
    {codigo: 3, nombre: "proteina", precio: 55 },
    {codigo: 4, nombre: "while protein", precio: 70 },
    {codigo: 5, nombre: "gold protein", precio: 90 },
    {codigo: 6, nombre: "creatina", precio: 150 },
]

function buscarProducto(codigo){
    let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo))
    return resultado
}

let carrito = [];

producto.forEach( (product) =>  {
    let content = document.createElement("div");
    content.innerHTML = `
    `
})