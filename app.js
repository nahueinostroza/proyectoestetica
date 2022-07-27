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
    }

    if (tratamiento ==="facial"){
        console.log("radiofrecuencia")
         }

    if (tratamiento === "facial"){
        console.log("mesoterapia virtual")
    }

    if (tratamiento === "facial"){
        console.log("alta frecuencia")
    }

    if (tratamiento === "facial"){
        console.log("microdermoabrasion")
    }

    if (tratamiento === "masajes"){
        console.log("masaje sueco")
    }

    if (tratamiento === "masajes"){
        console.log("drenaje linfatico manual")
    }

     if (tratamiento === "masajes"){
        console.log("shiatsu")
    }

     if (tratamiento === "masajes"){
        console.log("masaje reflejos")
    }

     if (tratamiento === "masajes"){
        console.log("masaje deportivo")
    }


    let URL=`precios.json`


    const obtenerContenido = (URL)=> {
        let preciosAmostrar = ""
        fetch(URL)
       .then((response)=> response.json())
       .then( (data)=>{
            for (contenido of data) {
                preciosAmostrar += listarprecios(contenido)
            }
            document.querySelector("#tablaprecios").innerHTML = preciosAmostrar
       }) 
    }
    
    const listarprecios= (contenido)=> {
        const {nombre, precio, duracion} = contenido
        return    `<tr>
                       <td>${nombre}</td>
                       <td>${precio}</td>
                       <td>${duracion}</td>
                   </tr>`
                }
    
obtenerContenido(URL)

          

    






     
    




