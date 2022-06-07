const inputTexto = document.querySelector(".text-area");
const mensaje = document.querySelector(".input-text-area");
var imagen = document.querySelector(".Icon");
var botonCopiar = document.querySelector(".BotonCopiar");
botonCopiar.style.visibility = "hidden";
var ningunMsjEncontrado = document.querySelector(".NingunMensajeEncontrado");
ningunMsjEncontrado.style.visibility = "visible";
var textoaDesencriptar = document.querySelector(".TextoaDesencriptar");
textoaDesencriptar.style.visibility = "visible";

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    imagen.style.visibility = "hidden";
    ningunMsjEncontrado.style.visibility = "hidden";
    textoaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
}

function encriptar(StringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    StringEncriptar=StringEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (StringEncriptar.includes(matrizCodigo[i][0])){
            StringEncriptar = StringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringEncriptar;
}

function botonDesEncriptar(){
    const textoDesEncriptado = desEncriptar(inputTexto.value);
    mensaje.value = textoDesEncriptado;
    imagen.style.visibility = "hidden";
    ningunMsjEncontrado.style.visibility = "hidden";
    textoaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
}

function desEncriptar(StringDesEncriptar){
    let matrizCodigoInv = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringDesEncriptar=StringDesEncriptar.toLowerCase();
    for (let j=0; j<matrizCodigoInv.length; j++){
        if(StringDesEncriptar.includes(matrizCodigoInv[j][0])){
            StringDesEncriptar=StringDesEncriptar.replaceAll(matrizCodigoInv[j][0],matrizCodigoInv[j][1])
        }
    }
    return StringDesEncriptar;
}

function BtnCopiar(){
    var botonMensaje =document.getElementById("input-text-area").value;
    document.getElementById("text-area").value = botonMensaje;
    mensaje.value = "";
    botonCopiar.style.visibility = "hidden";
    imagen.style.visibility = "visible";
    ningunMsjEncontrado.style.visibility = "visible";
    textoaDesencriptar.style.visibility = "visible";
}
