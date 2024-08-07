const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


/*ENCRIPTAR*/

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


/*DESENCRIPTAR*/

function desencriptar(stringdesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptar = stringdesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringdesencriptar.includes(matrizCodigo[i][1])) {
            stringdesencriptar = stringdesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringdesencriptar;
}


/*BOTON COPIAR*/

const btnCopiar = document.querySelector(".btnCopiar");

btnCopiar.addEventListener("click", () => {
    const texto = mensaje.value;
    if (!texto) {
        alert("No se encontró texto");
    } else {
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    }
});


/*BOTON LIMPIAR*/ 

const btnLimpiar = document.querySelector(".btnLimpiar");

btnLimpiar.addEventListener("click", () => {
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = ""; /* Restablece la imagen de fondo si es necesario */
});
































/*const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.computedStyleMap.backgrounImage = "none"

}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat" ]];
    stringEncriptado = stringEncriptado.tolowerCase()

    for(let i =0; i < matrizCodigo.length; i ++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado

}

*/




