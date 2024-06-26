const cerrarRedSocial = document.getElementById("cerrarRedSocial")

const ventanaEmergenteRedSocial1 = document.getElementById("ventanaEmergenteRedSocial")

cerrarRedSocial.addEventListener("click", function(){
    ventanaEmergenteRedSocial1.style.display = "none"
})
//crear contraseñas  
const ventanaemergeneredsoialcrerusuario = document.getElementById("ventanaemergeneredsoialcrerusuario")

const botonredessociales = document.getElementById("botonredessociales")

const cerrarcrearusuario = document.getElementById("cerrarcrearusuario")

botonredessociales.addEventListener("click", function(){
    ventanaEmergenteRedSocial1.style.display = "none"
    ventanaemergeneredsoialcrerusuario.style.display = "block"
})

cerrarcrearusuario.addEventListener("click", ()=>{
    ventanaEmergenteRedSocial1.style.display = "block"
    ventanaemergeneredsoialcrerusuario.style.display = "none"
})






















