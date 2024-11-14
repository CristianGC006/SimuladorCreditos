import {usuarios}from '../models/ModelUsuario.js'

export function login(){
    let loginUsuario=document.getElementById('login-usuario').value;
    let loginContraseña=document.getElementById('login-contraseña').value;
    
    usuarios.some(function(index){
     if(loginUsuario==index.usuario && loginContraseña==index.contraseña){
        window.location.href='/views/Public/pages/ViewCredito.html'
     } 
    }
    )
}

export function register(){
let registerNombre=document.getElementById('registerNombre').value
let registerUsuario=document.getElementById('registerUsuario').value
let registerEmail=document.getElementById('registerEmail').value
let registerContraseña=document.getElementById('registerContraseña').value
let registerConfirmarCont=document.getElementById('registerConfirmar').value

let newRegistro={
    nombre:registerNombre,
    usuario:registerUsuario,
    email:registerEmail,
    contraseña:registerContraseña,
    confirmarCont:registerConfirmarCont
}
usuarios.unshift(newRegistro)
document.getElementById('form-register').style.display='none'
document.getElementById('form-login').style.display='flex'
}
