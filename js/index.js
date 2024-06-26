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