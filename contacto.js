let formulario = document.getElementById("formulario")
let enviar = document.getElementById("enviar")
let borrar = document.getElementById("borrar")

formulario.addEventListener("submit",(e) => {
  e.preventDefault()

  verificarformulario()

  const content = document.createElement("div")

  
  content.innerHTML = `
  <img src="https://bloggerprise.net/wp-content/uploads/2015/08/Gracias-por-Contactarnos.png"/>
   `;
})

function verificarformulario(e){
  
  console.log(formulario.children[0].value);
  console.log(formulario.children[1].value);
}
