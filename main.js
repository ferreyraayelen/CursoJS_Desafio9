//Class Objeto Servicio

class objetoServicio {
    constructor(objetoLiteral) {
        this.id = objetoLiteral.id;
        this.nombreServicio = objetoLiteral.nombreServicio;
        this.descripcion = objetoLiteral.descripcion;
        this.precio = objetoLiteral.precio;
        this.vendido = false;
        this.stock = true;
    }
}

//Array de objetos

const serviciosWeb = [
    { id: 1, nombreServicio: "Landing Page", descripcion: "Las landing pages son páginas web promocionales que se crean para dar a conocer un producto o servicio en concreto a través de una única página web, sin páginas interiores. Es una manera excelente de fortalecer tu marca", precio: 10000 },

    { id: 2, nombreServicio: "Sitio web", descripcion: "El sitio web es el conjunto de varias páginas web que se agrupan para cumplir determinados objetivos, sin embargo, estos tienen un propósito común: ser la carta de presentación de un negocio en el mundo del internet.", precio: 20000 },

    { id: 3, nombreServicio: "Tienda online", descripcion: "Son aquellos sitios que permiten realizar un comercio electrónico mediante el sitio web, también llamados como carritos de compras o ventas. Estos sitios web permiten realizar transacciones entre comprador y vendedor.", precio: 30000 }];

console.log(serviciosWeb);


//convertir a los objetos literales en objetos servicios
//Primero crear un nuevo array

const listaDeObjetosServicio = [];
for (const servicio of serviciosWeb) {
    listaDeObjetosServicio.push(new objetoServicio(servicio));
}
console.log(listaDeObjetosServicio);

//EVENTOS
//Boton enviar formulario

/* et botonTrabajemosJuntxs = document.getElementById("btnEnviar");
botonTrabajemosJuntxs.onclick = () => { alert("Gracias por contactarte conmigo") } */


//Boton comprar

let botonComprarLP = document.getElementById("comprarLP");
botonComprarLP.onclick = () => { alert("Gracias por elegir este servicio") }

let botonComprarSW = document.getElementById("comprarSW");
botonComprarSW.onclick = () => { alert("Gracias por elegir este servicio") }

let botonComprarTO = document.getElementById("comprarTO");
botonComprarTO.onclick = () => { alert("Gracias por elegir este servicio") }

let botonBuscar = document.getElementById("btnBuscar");
botonBuscar.onclick = () => { alert("Elemento encontrado") }

//Link barra de navegación

let linkSobreMi = document.getElementById("linkSobreMi");
linkSobreMi.onmousemove = () => { alert("Conoceme") }


// Formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFomulario);

//Tomar campo nombre
let campoNombre = document.getElementById("nombreForm");

//Tomar campo celular
let campoCel = document.getElementById("WS");

//Tomar campo email
let campoEmail = document.getElementById("campoEmail")
console.log(campoEmail)

function validarFomulario(e) {
    if (isNaN(campoCel.value) || campoNombre.value == "" ||
        campoEmail.value == "") {
        e.preventDefault(); //prevenime el comportamiento por defecto // Esto evita que se borren todos los campos
        alert("Ingrese un nombre, un mail o un cel válido");
    }
}
