console.log("Hola este es el segundo");

//agrego un pedazo de codigo aca a ver si vos modificas algo adentro del codigo que pasa


let arrayDeWebs = [ "www.yahoo.com", "www.google.com", "www.facebook.com", "www.instagram.com"]

function agregarHttp (url){
  return "http://"+url;
}

//console.log(agregarHttp("www.playground.com"));
let arrayDeWebHttp = [];

function procesar (arrayDeWebs, agregarHttp){
  for (i=0; i < arrayDeWebs.length; i++){
   let webHttp = agregarHttp (arrayDeWebs[i]);
      arrayDeWebHttp.push (webHttp);
  }
  return arrayDeWebHttp;
}

console.log(arrayDeWebs.length);
console.log(arrayDeWebs);

console.log(procesar(arrayDeWebs, agregarHttp));
console.log(arrayDeWebHttp.length);

