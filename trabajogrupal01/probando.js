console.log ("Hola este es el primer achivo");
console.log("estoy modificando este archivo de nuevo! Podes agregarle cambios tambien vos");


//hola esto esta en la nueva branch y no en el main

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map (function(horario){
return horario-1;
}
)

console.log(horariosAtrasados);
