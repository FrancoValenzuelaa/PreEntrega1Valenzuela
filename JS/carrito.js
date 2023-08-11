
let carrito = [];

producto.forEach( (product) =>  {
    let content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;
})