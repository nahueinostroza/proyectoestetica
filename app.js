     class trat {
        constructor (nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    
    let tratamiento = prompt("¿Qué tratamiento queres hacerte? facial o masajes");
    
    
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

let URLma=`masajes.json`


    const obtenerPrecio = (URLma)=> {
        let preciosAmostrar = ""
        fetch(URLma)
       .then((response)=> response.json())
       .then( (data)=>{
            for (contenido of data) {
                preciosAmostrar += listadeprecios(contenido)
            }
            document.querySelector("#tablaprecios").innerHTML = preciosAmostrar
       }) 
    }
    
    const listadeprecios= (contenido)=> {
        const {nombre, precio, duracion} = contenido
        return    `<tr>
                       <td>${nombre}</td>
                       <td>${precio}</td>
                       <td>${duracion}</td>
                   </tr>`
                }
    
obtenerContenido(URLma)

if(tratamiento === facial){
    console.log("URL");
}

else if(tratamiento === masajes){
    console.log("URLma");
}



          

    






     
    




