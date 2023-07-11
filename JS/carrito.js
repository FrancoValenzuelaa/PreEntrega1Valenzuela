const producto = [
    {codigo: 1, nombre: "huevos", precio: 50 },
    {codigo: 2, nombre: "harina", precio: 50 },
    {codigo: 3, nombre: "pan", precio: 55 },
    {codigo: 4, nombre: "gaseosa", precio: 70 },
    {codigo: 5, nombre: "cerveza", precio: 90 },
    {codigo: 6, nombre: "carne", precio: 150 },
]

function buscarProducto(codigo){
    let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo))
    return resultado
}