
//fecha
const cambiarmododnocheindex = document.getElementById("cambiarmododnocheindex")
let fondossssss = document.getElementById("fondossssss")

let tituloCalculadora121212112 = document.getElementById("tituloCalculadora1212121")
let tituloredessosciales12121212 = document.getElementById("tituloredessosciales121212")

cambiarmododnocheindex.addEventListener("click", ()=>{
    fondossssss.classList.toggle("fondoDePantalla")
    fondossssss.classList.toggle("cambiarmododnoche")
    tituloCalculadora121212112.classList.toggle("colordetecto")
    tituloredessosciales12121212.classList.toggle("colordetecto")

})

//appCalculadora
const ventanaEmergentesCalculadora = document.getElementById("ventanaEmergentesCalculadora")
const aplicaionCalucladora = document.getElementById("aplicaion1Calucladora")

aplicaionCalucladora.addEventListener("click", function(){
    aplicaionCalucladora.classList.toggle("imagenDeCalculadoraFondo")
    aplicacionRedSocial.classList.remove("imagenDeCalculadoraFondo")
})

aplicaionCalucladora.addEventListener("dblclick", function(){
    aplicaionCalucladora.classList.remove("imagenDeCalculadoraFondo")
    ventanaEmergentesCalculadora.style.display = "block";
})
//appRedSocial
const ventanaEmergenteRedSocial = document.getElementById("ventanaEmergenteRedSocial")
const aplicacionRedSocial = document.getElementById("aplicacionRedSocial")

aplicacionRedSocial.addEventListener("click", function(){
    aplicacionRedSocial.classList.toggle("imagenDeCalculadoraFondo")
    aplicaionCalucladora.classList.remove("imagenDeCalculadoraFondo")
})

aplicacionRedSocial.addEventListener("dblclick", function(){
    aplicacionRedSocial.classList.remove("imagenDeCalculadoraFondo")
    ventanaEmergenteRedSocial.style.display = "block";
})



//descargar apps

const descargarapps = document.getElementById("descargarapps")

const descargarappsventanaemergente = document.getElementById("descargarappsventanaemergente")


descargarapps.addEventListener("click",function(){
    descargarappsventanaemergente.style.display = "block"
})

let fechaaaaaaa = document.getElementById("fechaaaaaaa")
let fechadeahora = new Date();
let dia = fechadeahora.getDate()
let mes = fechadeahora.getMonth() + 1
let ano = fechadeahora.getFullYear()

fechaaaaaaa.innerHTML = `${dia}/${mes}/${ano}`;

