import {usuarios}from '../models/ModelUsuario.js'

export function login(){
    console.log(usuarios)

}





export function register(){
let registerNombre=document.getElementById('registerNombre').value
let registerUsuario=document.getElementById('registerUsuario').value
let registerEmail=document.getElementById('registerEmail').value
let registerContraseña=document.getElementById('registerContraseña').value
let registerConfirmarCont=document.getElementById('registerConfirmarCont').value

let newRegistro={
    nombre:registerNombre,
    usuario:registerUsuario,
    email:registerEmail,
    contraseña:registerContraseña,
    confirmarCont:registerConfirmarCont
}
usuarios.push(newRegistro)
console.log(usuarios);

}
