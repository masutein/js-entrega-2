const productos = [
    {nombre: "ivrea pequeños", precio:750 },
    {nombre: "ivrea medianos", precio:950 },
    {nombre: "panini pequeños", precio:1100 },
    {nombre: "panini medianos", precio:1500 },
];
let carrito = []

let seleccion = prompt("Bienvenido desea ver nuestros precios en mangas")

while(seleccion != "si" && seleccion != "no"){
    alert("si o no")
    seleccion = prompt("Desea vere nuestros precios si o no?")
}

if(seleccion == "si"){
    alert("Lista de precios segun el manga")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");

    alert(todosLosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("Esperamos que vuelva pronto")
}

while(seleccion != "no"){
    let producto = prompt("Agrega productos para ver el precio")
    let precio = 0

    if(producto == "ivrea pequeños" || producto == "ivrea medianos" || producto == "panini pequeños" || producto == "panini medianos"){
        switch (producto) {
            case "ivrea pequeños":
                precio = 750;
                break;
            case "ivrea medianos":
                precio = 950;
                break;
            case "panini pequeños":
                precio = 1100;
                break;
            case "panini medianos":
                precio = 1500;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades vas a ordenar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else{
        alert("El producto ingresado no esta dentro de nuestro catalogo")
    }
    seleccion = prompt("Desea agregar algo mas?")

    while(seleccion === "no"){
        alert("Gracias por elegirnos, abra la consola para ver el detalle y los montos, Hasta Pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar: ${total}`)