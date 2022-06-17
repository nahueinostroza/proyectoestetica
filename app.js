let nombre1 = prompt("ingresa tu nombre");

let salida = "Hola " + nombre1 +  " Bienvenido a EsteticaSA"

alert (salida)

let tratamiento = prompt("ingresa los tratamientos que queres hacerte o ESC para terminar");

while (tratamiento != "ESC") {
    
    alert ("el tratamiento ingresado es " + tratamiento)
    tratamiento = prompt("ingrese otro tratamiento a la lista o ESC para para salir")

    if (tratamiento=="masaje sueco") {
        console.log("El precio de tu tratamiento es $1800")
        precio=1800
    }
    
    else if (tratamiento=="drenaje linfatico manual"){
        console.log("El precio de tu tratamiento es $2300")
        precio=2300 
    }
    
    else if (tratamiento=="shiatsu"){
        console.log("El precio de tu tratamiento es $2300")
        precio=2300
    }
    else if (tratamiento=="masaje reflejos"){
        console.log("El precio de tu seguro es $2500")
        precio=2500
    }
    else if (tratamiento=="masaje deportivo"){
        console.log("El precio de tu tratamiento es $2300")
        precio=2300
     }
     else if (tratamiento=="aplicador de micropuncion"){
        console.log("El precio de tu tratamiento es $2000")
        precio=2000
     }
     else if (tratamiento=="radiofrecuencia"){
        console.log("El precio de tu tratamiento es $2000")
        precio=2000
     }
     else if (tratamiento== "mesoterapia virtual"){
        console.log("El precio de tu tratamiento es $2300")
        precio=2300
     }
     else if (tratamiento=="alta frecuencia"){
        console.log("El precio de tu tratamiento es $2300")
        precio=2300
     }
     else if (tratamiento=="microdermoabrasion"){
        console.log("El precio de tu tratamiento es $2000")
        precio=2300
     }
}

const suma = (n1, n2, n3,n4) => n1 + n2 + n3 + n4 

const iva = valor => valor * 0.21 

let precioDemasaje = 2500

let precioDetratfacial = 2100


let precioconiva = suma(precioDemasaje,iva(precioDemasaje), precioDetratfacial,iva(precioDetratfacial));
console.log(precioconiva)


class Tratamiento {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase ();
        this.precio= parseFloat(precio);
    }
    precioIva() {
        this.precioIva = this.precioIva * 0.21;
    
      
 }
}

 const tratamientos = [];
 tratamientos.push(new Tratamiento("masaje sueco", "1800"));
 tratamientos.push(new Tratamiento("shiatsu", "2300"));
 tratamientos.push(new Tratamiento("masaje relejos", "2500"));
 tratamientos.push(new Tratamiento("masaje deportivo", "2300"));
 tratamientos.push(new Tratamiento("aplicador de micropuncion", "2000"));
 tratamientos.push(new Tratamiento("radiofrecuencia", "2000"));
 tratamientos.push(new Tratamiento("mesoterapia virtual", "2300"));
 tratamientos.push(new Tratamiento("alta frecuencia", "2300"));
 tratamientos.push(new Tratamiento("microdermoabrasion", "2000"));

 for (const tratamiento of tratamientos){
        console.log(tratamiento) 
     }  
     
    




