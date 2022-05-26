//Tomo el valor del TextArea principal
var texto = document.querySelector("#texto");
//Tomo valor texto resultante segundo TextArea
var textoEncriptado = document.querySelector("#respuesta");
var conta = "";
//Tomo valor del botón Encriptar
var botonEncriptar = document.querySelector("#bto-encriptar");

//Funcion para encriptar el texto
function encriptarTexto(){
    var palabra = texto.value;
    var contenedor = "";
    
    for(var i = 0; i < palabra.length; i++){
        if(palabra[i] == "a"){
            contenedor = contenedor + "ai";
        } else if(palabra[i] == "e"){
            contenedor = contenedor + "enter";
        } else if(palabra[i] == "i") {
            contenedor = contenedor + "imes";
        }else if(palabra[i] == "o"){
            contenedor = contenedor + "ober";
        } else if(palabra[i] == "u"){
            contenedor = contenedor + "ufet";
        } else{
            contenedor = contenedor + palabra[i];
        }
    }

    textoEncriptado.value = contenedor;
}

botonEncriptar.addEventListener("click",encriptarTexto);