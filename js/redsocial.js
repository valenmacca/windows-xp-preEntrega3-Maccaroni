//crear contraseñas  
const ventanaemergeneredsoialcrerusuario = document.getElementById("ventanaemergeneredsoialcrerusuario");

const botonredessociales = document.getElementById("botonredessociales");

const cerrarcrearusuario = document.getElementById("cerrarcrearusuario");

let paraffo12 = document.getElementById("paraffo12")


botonredessociales.addEventListener("click", function(){
    ventanaEmergenteRedSocial1.style.display = "none";
    setTimeout(function(){
        ventanaemergeneredsoialcrerusuario.style.display = "block"
        contrasenaverificarinputredes.value = ""
        usuarioverificarinputredes.value = ""
    },250);
});

cerrarcrearusuario.addEventListener("click", ()=>{
    ventanaEmergenteRedSocial1.style.display = "block"
    ventanaemergeneredsoialcrerusuario.style.display = "none"
    pdemensajedeeeor.innerHTML = ""
});


const botoncreausuarioredes = document.getElementById("botoncreausuarioredes");

let ponerelnombrecrearusuario = document.getElementById("ponerelnombrecrearusuario");

let crearcontrasenaaausuarioredes = document.getElementById("crearcontrasenaaausuarioredes");

let pdemensajedeeeor = document.getElementById("pdemensajedeeeorr");







botoncreausuarioredes.addEventListener("click", function(){
    let contrasenavalor = crearcontrasenaaausuarioredes.value;
    let usuariovalor = ponerelnombrecrearusuario.value;
    
    if(!usuariovalor && !contrasenavalor){
        pdemensajedeeeor.innerHTML = "ingresa el usuario y contraseña que quieres crear"
        pdemensajedeeeor.style.color = "red"
    }else if(usuariovalor && !contrasenavalor){
        pdemensajedeeeor.innerHTML = "ingresa la contraseña"
        pdemensajedeeeor.style.color = "red"
    }else if(!usuariovalor && contrasenavalor){
        pdemensajedeeeor.innerHTML = "ingresa el usuario"
        pdemensajedeeeor.style.color = "red"
    }else if(usuariovalor && contrasenavalor){
        pdemensajedeeeor.innerHTML = "cuenta creada"
        pdemensajedeeeor.style.color = "green"
        pdemensajedeeeor.style.fontSize = "50px"
        

        let contrasenausuarioredes = localStorage.setItem(`contraseña`, contrasenavalor)
        let nombredeusuarioredes = localStorage.setItem(`usuario`,usuariovalor )


        setTimeout(function(){
            ventanaEmergenteRedSocial1.style.display = "block"
            ventanaemergeneredsoialcrerusuario.style.display = "none"
            crearcontrasenaaausuarioredes.value = ""
            ponerelnombrecrearusuario.value = ""
            pdemensajedeeeor.innerHTML = ""
        },350)
    }
});

//usuario
let arraysusuarios = [];

let inputsderedessoscialesss = document.getElementById("inputsderedessoscialesss");

const cerrarRedSocial = document.getElementById("cerrarRedSocial");

const ventanaEmergenteRedSocial1 = document.getElementById("ventanaEmergenteRedSocial");

const ventanaderedessoscialesss = document.getElementById("ventanaderedessoscialesss");
const cerrarventaderedosicllll = document.getElementById("cerrarventaderedosicllll");

cerrarRedSocial.addEventListener("click", function(){
    ventanaEmergenteRedSocial1.style.display = "none"
});

let usuarioverificarinputredes = document.getElementById("usuarioverificarinputredes");
let contrasenaverificarinputredes = document.getElementById("contrasenaverificarinputredes");

inputsderedessoscialesss.addEventListener("click", function() {
    let usuarioverificarinputredesvalor = usuarioverificarinputredes.value;
    let contrasenaverificarinputredesvalor = contrasenaverificarinputredes.value;

    let usuariosesionguardadoo = localStorage.getItem('usuario');
    let contrasenasesionguardadoo = localStorage.getItem('contraseña');
    if(usuarioverificarinputredesvalor === usuariosesionguardadoo && contrasenaverificarinputredesvalor === contrasenasesionguardadoo){
        ventanaderedessoscialesss.style.display = "block"
        ventanaEmergenteRedSocial1.style.display = "none"
        paraffo12.innerHTML=""
        
    }else{
        paraffo12.innerHTML="usuario y/o contraseñas incorrecto"
        paraffo12.style.color="red"
        paraffo12.style.fontSize="25px"
    }

});

// usuario ya creado entrar ala red

cerrarventaderedosicllll.addEventListener("click", ()=>{
    ventanaderedessoscialesss.style.display = "none"
})


//``
//localStorage.clear();



















