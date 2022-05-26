//Tomo valor texto resultante segundo TextArea
var textoEncriptado = document.querySelector("#respuesta");

function copiarTexto(){
    var copyText = document.querySelector("#respuesta");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copiarTexto").addEventListener("click", copy);