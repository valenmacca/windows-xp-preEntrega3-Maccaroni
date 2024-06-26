let arraysCaracteres = ["+", "-", "/", "*", "."]

const error = document.getElementById("error")

let mostrarMensajeError = false

let p = document.createElement("p")

let pantallaCalcular2 = document.getElementById("pantalla")

let cerrarCalculadora = document.getElementById("cerrarCalculadora")

const ventanaEmergentesCalculadora1 = document.getElementById("ventanaEmergentesCalculadora")

const aplicaionCalucladora1 = document.getElementById("aplicaion1Calucladora")

cerrarCalculadora.addEventListener("click", function(){
    ventanaEmergentesCalculadora1.style.display = "none";
    borrarHistorial()
    p.innerHTML = ""
})


function numero(nuevocaracter) {
    let anteULtimoEsEspecial = false
    let nuevoCaracterEsEspecial = false
    let anteultimo = pantallaCalcular2.value.charAt(pantallaCalcular2.value.length - 1)
    arraysCaracteres.forEach(element => {
    if(anteultimo === element){
        anteULtimoEsEspecial = true
    }
    if(nuevocaracter === element){
        nuevoCaracterEsEspecial = true
    }
    
    });
    if(!anteULtimoEsEspecial || !nuevoCaracterEsEspecial){
        pantallaCalcular2.value += nuevocaracter;
        numeroGuardado = pantallaCalcular2.value
    }
}

function borrar() {
    document.getElementById("pantalla").value = "";
    p.innerHTML = ""
    mostrarMensajeError = false
}

function calcular() {
    const pantalla = document.getElementById("pantalla");
    const contieneOperador = arraysCaracteres.some(caracter => pantalla.value.includes(caracter));

    if (!pantalla.value && mostrarMensajeError === false) {
        p.innerHTML = "ingrese un numero "
        p.classList.add("cambiarpdejs")
        error.appendChild(p)
        mostrarMensajeError = true
    }
    else if (pantalla.value && !contieneOperador) {
        p.innerHTML = "ingresa un operador ";
        p.classList.add("cambiarpdejs");
        error.appendChild(p);
        mostrarMensajeError = true;
    }
    
    else if (pantalla.value) {
        const resultado = eval(pantalla.value);
        document.getElementById("pantalla").value = resultado;
        let resultados = document.getElementById("resultados")
        let mensajeResultados = document.createElement("p")
        mensajeResultados.innerHTML = `${numeroGuardado} = ${resultado}`
        resultados.appendChild(mensajeResultados);
        p.innerHTML = ""
        mostrarMensajeError = false
    }
}

function borrarUnSoloDigito() {
    const pantallaBorrar = document.getElementById("pantalla")
    pantallaBorrar.value = pantallaBorrar.value.slice(0, -1)
}

function borrarHistorial(){
    resultados.innerHTML = `
    <h2> resultados </h2>
    <p> </p>
    `
}
// ``