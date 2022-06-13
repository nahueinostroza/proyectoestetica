let nombre1 = prompt("ingresa tu nombre");

let salida = "Hola " + nombre1 +  " Bienvenido a EsteticaSA"

alert (salida)

let dato = prompt("ingresa los tratamientos que queres hacerte o ESC para terminar");

while (dato != "ESC") {
    alert ("el tratamiento ingresado es " + dato)
    dato = prompt("ingrese otro tratamiento a la lista o ESC para para salir")
}


const suma = (n1, n2, n3,n4) => n1 + n2 + n3 + n4 

const iva = valor => valor * 0.21 

let precioDemasaje = 2500

let precioDetratfacial = 2100


let precioconiva = suma(precioDemasaje,iva(precioDemasaje), precioDetratfacial,iva(precioDetratfacial));
console.log(precioconiva)


