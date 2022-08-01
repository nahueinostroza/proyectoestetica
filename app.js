let URL=`precios.json`
let URLma=`masajes.json`

const botonmasajes = document.querySelector("#masaje")
const botonfacial = document.querySelector("#facial")

botonmasajes.addEventListener ("click", ()=>obtenerContenido(URLma))
botonfacial.addEventListener ("click", ()=>obtenerPrecio(URL))


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



     
     class trat {
        constructor (nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    

    let tratamientos = []

    let tratamiento1= new trat ("facial");
    let tratamiento2= new trat ("masajes");

    tratamientos.push (tratamiento1)
    tratamientos.push (tratamiento2)


    
    
    







          

    






     
    




