//let nombre1 = prompt("ingresa tu nombre");

//let salida = "Hola " + nombre1 +  " Bienvenido a EsteticaSA"

//alert (salida)

//let tratamiento = prompt("ingresa los tratamientos que queres hacerte o ESC para terminar");

//while (tratamiento != "ESC") {
    
    //alert ("el tratamiento ingresado es " + tratamiento)
//    tratamiento = prompt("ingrese otro tratamiento a la lista o ESC para para salir")

  //  if (tratamiento=="masaje sueco") {
        //console.log("El precio de tu tratamiento es $1800")
        //precio=1800
    //}
    
    //else if (tratamiento=="drenaje linfatico manual"){
      //  console.log("El precio de tu tratamiento es $2300")
        //precio=2300 
    //}
    
    //else if (tratamiento=="shiatsu"){
       // console.log("El precio de tu tratamiento es $2300")
       // precio=2300
   // }
    //else if (tratamiento=="masaje reflejos"){
    //    console.log("El precio de tu seguro es $2500")
   //     precio=2500
    //}
    //else if (tratamiento=="masaje deportivo"){
     //   console.log("El precio de tu tratamiento es $2300")
     //   precio=2300
     //}
     //else if (tratamiento=="aplicador de micropuncion"){
      //  console.log("El precio de tu tratamiento es $2000")
       // precio=2000
     //}
     //else if (tratamiento=="radiofrecuencia"){
       // console.log("El precio de tu tratamiento es $2000")
        //precio=2000
    // }
    // else if (tratamiento== "mesoterapia virtual"){
      //  console.log("El precio de tu tratamiento es $2300")
      //  precio=2300
     //}
     //else if (tratamiento=="alta frecuencia"){
      //  console.log("El precio de tu tratamiento es $2300")
      //  precio=2300
    // }
     //else if (tratamiento=="microdermoabrasion"){
      //  console.log("El precio de tu tratamiento es $2000")
       // precio=2300
     //}
     // }


//const suma = (n1, n2, n3,n4) => n1 + n2 + n3 + n4 

//const iva = valor => valor * 0.21 

//let precioDemasaje = 2500

////let precioDetratfacial = 2100


//let precioconiva = suma(precioDemasaje,iva(precioDemasaje), precioDetratfacial,iva(precioDetratfacial));
//console.log(precioconiva)


//class Tratamiento {
    //constructor (nombre, precio) {
        //this.nombre = nombre.toUpperCase ();
        //this.precio= parseFloat(precio);
    //}
    //precioIva() {
        //this.precioIva = this.precioIva * 0.21;
    
      
 //}
//}

 //const tratamientos = [];
 //tratamientos.push(new Tratamiento("masaje sueco", "1800"));
 //tratamientos.push(new Tratamiento("shiatsu", "2300"));
 //tratamientos.push(new Tratamiento("masaje relejos", "2500"));
 //tratamientos.push(new Tratamiento("masaje deportivo", "2300"));
// tratamientos.push(new Tratamiento("aplicador de micropuncion", "2000"));
 //tratamientos.push(new Tratamiento("radiofrecuencia", "2000"));
 //tratamientos.push(new Tratamiento("mesoterapia virtual", "2300"));
 //tratamientos.push(new Tratamiento("alta frecuencia", "2300"));
 //tratamientos.push(new Tratamiento("microdermoabrasion", "2000"));

 //for (const tratamiento of tratamientos){
        //console.log(tratamiento) 
     //}  







     class tratamiento {
        constructor (masajes, facial) {
            this.masajes = masajes;
            this.facial = facial;
        }
    }
    
    let modelo=prompt("¿Qué tratamiento queres hacerte? facial/masajes ").toUpperCase();

    let tratamientos = []

    let tratamiento1= new tratamiento ("facial");
    let tratamiento2= new tratamiento ("masajes");

    tratamientos.push (tratamiento1);
    tratamientos.push (tratamiento2)

    if (tratamientos="facial") {
        console.log("aplicador de micropuncion")
        precio=4000
    }

    if (tratamientos="facial"){
        console.log("radiofrecuencia")
        precio=2000
         }

    if (tratamientos="facial"){
        console.log("mesoterapia virtual")
        precio=2300
    }

    if (tratamientos="facial"){
        console.log("alta frecuencia")
        precio=2300
    }

    if (tratamientos="facial"){
        console.log("microdermoabrasion")
        precio=2000
    }

    else if (tratamientos=="masajes"){
        console.log("masaje sueco")
        precio=1800
    }

    else if (tratamientos=="masajes"){
        console.log("drenaje linfatico manual")
        precio=2300
    }

    else if (tratamientos=="masajes"){
        console.log("shiatsu")
        precio=2300
    }

    else if (tratamientos=="masajes"){
        console.log("masaje reflejos")
        precio=2500
    }

    else if (tratamientos=="masajes"){
        console.log("masaje deportivo")
        precio=2300
    }

    switch (precio){
        case 3000:
            alertaefectivo ()
            break;
        case 2000:
            alertaefectivo ()
            break;
        case 2500:
            alertaefectivo ()
        case 2300:
            alertaefectivo ()
        case 1800:
            alertaefectivo ()
        case 4000:
            alertadebito ()            
             }
       

            
             function alertaefectivo () {
                console.log("Se tendra que pagar en efectivo")
            }

            function alertadebito () {
                console.log("Se puede pagar en efectivo o tarjeta de debito")
            }






     
    




