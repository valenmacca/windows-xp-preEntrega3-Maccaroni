const cerrarventadedescargarapps1 = document.getElementById("cerrarventadedescargarapps")

const descargarapps1 = document.getElementById("descargarapps")

const descargarappsventanaemergente1 = document.getElementById("descargarappsventanaemergente")


cerrarventadedescargarapps1.addEventListener("click", ()=>{
    descargarappsventanaemergente1.style.display ="none"
    pantallaparadescargarapps.style.display = "none"
})

//pantalla apps

let redesbloque = false
let calculadorabloque = false

const calculadoraparadescargarredes = document.getElementById("calculadoraparadescargarredes")
const redessocialesparadescargarredes = document.getElementById("redessocialesparadescargarredes")
const pantallaparadescargarapps = document.getElementById("pantallaparadescargarapps")

calculadoraparadescargarredes.addEventListener("click",function(){
    pantallaparadescargarapps.style.display = "block"
    calculadorabloque = true
})

redessocialesparadescargarredes.addEventListener("click",function(){
    pantallaparadescargarapps.style.display = "block"
    redesbloque = true
})

let botonesparadescargarappssi = document.getElementById("botonesparadescargarappssi")
let botonesparadescargarappsno = document.getElementById("botonesparadescargarappsno")

let imagenDeCalculadora = document.getElementById("imagenDeCalculadora")
let tituloCalculadora1212121 = document.getElementById("tituloCalculadora1212121")
let paradescarkasappastodasss = document.getElementById("paradescarkasappastodasss")
let calculadoradescargada = false

let redesdescargada = false
let imagenDeRedSocial = document.getElementById("imagenDeRedSocial")
let tituloredessosciales121212 = document.getElementById("tituloredessosciales121212")




botonesparadescargarappsno.addEventListener("click", function(){
    pantallaparadescargarapps.style.display = "none"
    descargarappsventanaemergente1.style.display ="none"
})

botonesparadescargarappssi.addEventListener("click", function(){
    if(!calculadoradescargada && !redesbloque){
        paradescarkasappastodasss.innerHTML = "Descargando.."
        setTimeout(function(){
            imagenDeCalculadora.style.display = "block"
            tituloCalculadora1212121.style.display = "block"
            pantallaparadescargarapps.style.display = "none"
            descargarappsventanaemergente1.style.display ="none"
            paradescarkasappastodasss.innerHTML = ""
            calculadoradescargada = true
        },1000)
    }
    else if(!redesdescargada && !calculadorabloque){
        paradescarkasappastodasss.innerHTML = "Descargando.."
        setTimeout(function(){
            imagenDeRedSocial.style.display = "block"
            tituloredessosciales121212.style.display = "block"
            pantallaparadescargarapps.style.display = "none"
            descargarappsventanaemergente1.style.display ="none"
            paradescarkasappastodasss.innerHTML = ""
            redesdescargada = true
        },1000)}

        else if(!redesdescargada && calculadorabloque){
            paradescarkasappastodasss.innerHTML = "Descargando.."
            setTimeout(function(){
                imagenDeRedSocial.style.display = "block"
                tituloredessosciales121212.style.display = "block"
                pantallaparadescargarapps.style.display = "none"
                descargarappsventanaemergente1.style.display ="none"
                paradescarkasappastodasss.innerHTML = ""
                redesdescargada = true
            },1000)
        }else if(!calculadoradescargada && redesbloque){
            paradescarkasappastodasss.innerHTML = "Descargando.."
            setTimeout(function(){
                imagenDeCalculadora.style.display = "block"
                tituloCalculadora1212121.style.display = "block"
                pantallaparadescargarapps.style.display = "none"
                descargarappsventanaemergente1.style.display ="none"
                paradescarkasappastodasss.innerHTML = ""
                redesdescargada = true
            },1000)
        }

        else if(redesdescargada  && calculadoradescargada){
            paradescarkasappastodasss.innerHTML = "esta aplicaion ya esta descargada"
            setTimeout(() => {
                pantallaparadescargarapps.style.display = "none"
                paradescarkasappastodasss.innerHTML = ""
            }, 700);
        }

})

//

