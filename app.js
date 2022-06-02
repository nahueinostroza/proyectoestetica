let nombre1 = prompt("ingresa tu nombre");

let salida = "Hola " + nombre1 +  " Bienvenido a EsteticaSA"

alert (salida)

let dato = prompt("ingresa los tratamientos que queres hacerte o ESC para terminar");

while (dato != "ESC") {
    alert ("el tratamiento ingresado es " + dato)
    dato = prompt("ingrese otro tratamiento a la lista o ESC para para salir")
}