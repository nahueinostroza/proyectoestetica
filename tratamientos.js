let tratamientos = [
    {nombre: "masaje sueco", precio: 1800},
    {nombre: "drenaje linfatico manual", precio: 2300},
    {nombre: "shiatsu", precio: 2300},
    {nombre: "masaje reflejo", precio: 2500},
    
];

localStorage.setItem("tratamientos",JSON.stringify(tratamientos));

let lista = localStorage.getItem("tratamientos");
console.log(JSON.parse(lista));

