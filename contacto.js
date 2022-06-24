let enviar = document.getElementById("enviar")
let formulario = document.getElementById("formulario")
let borrar = document.getElementById("borrar")

enviar.addEventListener("click", () =>{
   
  const content = document.createElement("div")

content.innerHTML = `
<img src="https://bloggerprise.net/wp-content/uploads/2015/08/Gracias-por-Contactarnos.png"/>
 `;

 formulario.append(content) 

 formulario.addEventListener("submit", verificarformulario);

function verificarformulario(e){
    e.preventDefault();
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
}

    
})

borrar.addEventListener("click", () =>{
    formulario.innerHTML=""
 })
