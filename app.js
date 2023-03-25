//Obtencion de elementos
const btnAgregar = document.querySelectorAll(".btn-producto");
const containCarrito = document.getElementById("contain-carrito");
let btnClose = document.getElementById("btn-close");
const inputCombo = document.getElementById("input-combo");
let precioTotal = document.getElementById("precio-total");
const parrafoCombo = document.getElementById("p-combo");
const imgCombo = document.getElementById("img-combo");
const iconoCarrito = document.getElementById("carrito");
const parrafoCarrito = document.getElementById("p-carrito");
const btnStock = document.querySelectorAll(".btn-stock");
const a_Productos = document.getElementById("a-productos")
const vaciarCarrito = document.getElementById("vaciar-carrito");




//Array con objetos
const productos = [{
  id: 1,
  img: 'burgerCombo1.jpg',
  nombre: 'Combo1',
  precio: 300,
  cant: 1,
  btn: "Eliminar Producto"

},{
  id: 2,
  img: 'burgerConPapas.jpg',
  nombre: 'Combo2',
  precio: 280,
  cant: 1,
  btn: "Eliminar Producto"

},{
  id: 3,
  img: 'burgerPollo.jpg',
  nombre: 'Combo3',
  precio: 250,
  cant: 1,
  btn: "Eliminar Producto"

},{
  id: 4,
  img: 'burgerX3.jpg',
  nombre: 'Combo4',
  precio: 400,
  cant:  1,
  btn: "Eliminar Producto"
},{
  id: 5,
  img: 'burgerCheddar.jpg',
  nombre: 'Burger Cheddar',
  precio: 280,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 6,
  img: 'PolloBurger.jpg',
  nombre: 'Pollo Bruger',
  precio: 270,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 7,
  img: 'BurgerConPapas.jpg',
  nombre: 'Burger Con Papas',
  precio: 250,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 8,
  img: 'burgesTresCarnes.jpg',
  nombre: 'Burger Tres Carnes',
  precio: 300,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 9,
  img: 'burgerVegg.jpg',
  nombre: 'Burger Vegg',
  precio: 240,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 10,
  img: 'burgerDeLaCasa.jpg',
  nombre: 'Burger de la Casa',
  precio: 360,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 11,
  img: 'postreChaja.jpg',
  nombre: 'Postre Chaja',
  precio: 190,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 12,
  img: 'postreFlan.jpg',
  nombre: 'Flan con dulce',
  precio: 165,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 13,
  img: 'brownie.jpg',
  nombre: 'Brownie',
  precio: 185,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 14,
  img: 'salus1.5conGas.jpg',
  nombre: 'Agua con gas 1.5',
  precio: 55,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 15,
  img: 'salus1.5sinGas.jpg',
  nombre: 'Agua sin gas 1.5',
  precio: 55,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 16,
  img: 'coca1.5Litro.jpg',
  nombre: 'Coca cola 1.5',
  precio: 130,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 17,
  img: 'patricia.jpg',
  nombre: 'Cerveza Patrica 1 litro',
  precio: 150,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 18,
  img: 'stella.png',
  nombre: 'Cerveza Stella 1 litro',
  precio: 170,
  cant : 1,
  btn: "Eliminar Producto"
},{
  id: 19,
  img: 'zillertal.jpg',
  nombre: 'Cerveza Zillertal 1 litro',
  precio: 160,
  cant : 1,
  btn: "Eliminar Producto"
}

];

  

let carrito = [];

//eventListener a document al cargarse el documento 
document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
    containCarrito.innerHTML = "";
    
});

//Recorriendo cada button con un forEach y ejecutuando funciones

btnAgregar.forEach(btn =>{
  btn.addEventListener("click",function(e){       

   agregarAcarrito(e.target.id);
    
  });
})

// funcion que agrega los productos al carrito

function agregarAcarrito (id){
     
    const existe = carrito.some(prod => prod.id == id);

        if(existe){
          const producto = carrito.map(proD =>{
             if(proD.id == id){
                proD.cant++;
             }
          })
        } else {
         
          const item = productos.find(prod => prod.id == id);
          carrito.push(item);
          parrafoCarrito.innerText = carrito.length;
          
        }
};

// function que elimina productos ejecutada con un onClick

function eliminarProducto (id){
  
  const prodId = id;
    carrito = carrito.filter((prod) => prod.id !== prodId);   // Filtramos el carrito con filter(); pasandole el id del btnEliminar,
    mostrarCarrito();                                          // utilizamos un operador desigual para asi traer el producto que no sea igual al id pasado    
  containCarrito.append(btnClose);

  S
};

//function que mustra el producto en el carrito
function mostrarCarrito(){
 containCarrito.innerHTML = '';
  carrito.forEach(prod =>{          //Recorremos en carrito con forEach y creamos un div por cada elemento encontrado
    
    const {id,img,nombre,precio,cant,btn} = prod;
        containCarrito.innerHTML += `
        <div class="div-combo">
            <img class="img-combo" src="${img}">
            <h1 class="h1-div_combo">${nombre}</h1>
            <p class="p-div_combo">${"$ " + precio}</p>
            <p class="h1-div_combo">${"Cantidad: " + cant}</p>
            <button onclick="eliminarProducto(${id})" class="btn-eliminar_producto">${btn}</button>
            </div> `;   
    });
      parrafoCarrito.innerText = carrito.length;
        guardarStorage();
          precioTotal.innerText = " Precio total: $ " + carrito.reduce((acc,pro)=> acc + pro.cant * pro.precio,0);
             containCarrito.append(precioTotal)

    
   
       
  };
// eventListener a carrito para mostrar productos
iconoCarrito.addEventListener("click",function(){
  containCarrito.classList.add("contain-carrito");
    btnClose.style.display = "block";
    precioTotal.style.display = "block";
    mostrarCarrito();
    eliminarProducto();
   
});
// eventListener que elimina la clase del carrito
btnClose.addEventListener("click",function(){
  containCarrito.classList.remove("contain-carrito");
  containCarrito.innerHTML = "";
    btnClose.style.display = "none";
    precioTotal.style.display = "none";


  
});

// guardamos en el localStorage contenido del carrito
function guardarStorage (){ localStorage.setItem("carrito", JSON.stringify(carrito));};







  

