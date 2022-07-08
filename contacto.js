let elformulario = document.getElementById("formulario");

elformulario.addEventListener("submit", validarformulario);

function validarformulario(e) {
  e.preventDefault();

  console.log(document.getElementById("email1").value);
  console.log(document.getElementById("textarea1").value);
  
}

let boton =
document.getElementById("enviar")
boton.addEventListener("click", formenvi)

function formenvi () {
  alert ("formulario enviado");
}

let eliminar =
document.getElementById("borrar")
eliminar.onclick = () => elformulario.reset()

/*Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})*/

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
})










