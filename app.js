     class trat {
        constructor (nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    
    let tratamiento = prompt("¿Qué tratamiento queres hacerte? facial o masajes");
    

    
   let tratamientos = []

    let tratamiento1= new trat ("facial");
    let tratamiento2= new trat ("masajes");

    tratamientos.push (tratamiento1);
    tratamientos.push (tratamiento2);

    if (tratamiento === "facial") {
        console.log("aplicador de micropuncion")
        precio=4000
    }

    if (tratamiento ==="facial"){
        console.log("radiofrecuencia")
        precio=2000
         }

    if (tratamiento === "facial"){
        console.log("mesoterapia virtual")
        precio=2300
    }

    if (tratamiento === "facial"){
        console.log("alta frecuencia")
        precio=2300
    }

    if (tratamiento === "facial"){
        console.log("microdermoabrasion")
        precio=2000
    }

    if (tratamiento === "masajes"){
        console.log("masaje sueco")
        precio=1800
    }

    if (tratamiento === "masajes"){
        console.log("drenaje linfatico manual")
        precio=2300
    }

     if (tratamiento === "masajes"){
        console.log("shiatsu")
        precio=2300
    }

     if (tratamiento === "masajes"){
        console.log("masaje reflejos")
        precio=2500
    }

     if (tratamiento === "masajes"){
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






     
    




