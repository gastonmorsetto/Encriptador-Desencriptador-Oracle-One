//Tomo el valor del TextArea principal
var texto = document.querySelector("#texto");
//Tomo valor texto resultante segundo TextArea
var textoEncriptado = document.querySelector("#respuesta");
var conta = "";

//Funcion para desencriptar el texto
function desencriptarTexto(){
    var palabra = texto.value;
    var contenedor = "";
    
    for(var i = 0; i < palabra.length; i++){
        if((palabra[i] == "a") && (palabra[i+1] == "i")){
            contenedor = contenedor + "a";
            i = i + 1;
        } else if((palabra[i] == "e") && (palabra[i+1] == "n") && (palabra[i+2] == "t") && (palabra[i+3] == "e" && (palabra[i+4] == "r"))){
            contenedor = contenedor + "e";
            i = i + 4;
        } else if((palabra[i] == "i") && (palabra[i+1] == "m") && (palabra[i+2] == "e") && (palabra[i+3] == "s")) {
            contenedor = contenedor + "i";
            i = i + 3;
        }else if((palabra[i] == "o") && (palabra[i+1] == "b") && (palabra[i+2] == "e") && (palabra[i+3] == "r")){
            contenedor = contenedor + "o";
            i + i + 3;
        } else if((palabra[i] == "u") && (palabra[i+1] == "f") && (palabra[i+2] == "e") && (palabra[i+3] == "t")){
            contenedor = contenedor + "u";
            i = i + 3;
        } else{
            contenedor = contenedor + palabra[i];
        }
    }

    textoEncriptado.value = contenedor;
}