//Tomo valor texto resultante segundo TextArea
var copyText= document.querySelector("#respuesta");

function copiarTexto(){
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#bto-copiar").addEventListener("click", copiarTexto);