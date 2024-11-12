import { expresionesRegulares } from "../../../Helpers/expresiones.js";
document
  .querySelector("#btnFormRegistro")
  .addEventListener("click", function () {
    document.querySelector("#form-login").style.display = "flex";
    document.querySelector("#form-register").style.display = "none";
  });

document.querySelector("#btnFormLogin").addEventListener("click", function () {
  document.querySelector("#form-login").style.display = "none";
  document.querySelector("#form-register").style.display = "flex";
});

let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("keyup", validarFormulario);
}

function validarFormulario(e) {
  // console.log(e);
  switch (e.target.name) {
    case "registerNombre":
      if (expresionesRegulares.nombre.test(e.target.value)) {
        document.getElementById("registerNombre").classList.add("correcto");
        document
          .getElementById("registerNombre")
          .classList.remove("incorrecto");
      } else {
        document.getElementById("registerNombre").classList.add("incorrecto");
        document.getElementById("registerNombre").classList.remove("correcto");
        //  document.getElementById("mensajeNombre").textContent="El nombre solo permite letras en mayusculas"
      }
      break;
    case "registerUsuario": 
      if (expresionesRegulares.usuario.test(e.target.value)) {
        document.getElementById("registerUsuario").classList.add("correcto");
        document
          .getElementById("registerUsuario")
          .classList.remove("incorrecto");
      } else {
        document.getElementById("registerUsuario").classList.add("incorrecto");
        document.getElementById("registerUsuario").classList.remove("correcto");
      }
    case "registerEmail":
      if (expresionesRegulares.correo.test(e.target.value)) {
        document.getElementById("registerEmail").classList.add("correcto");
        document.getElementById("registerEmail").classList.remove("incorrecto");
      } else {
        document.getElementById("registerEmail").classList.add("incorrecto");
        document.getElementById("registerEmail").classList.remove("correcto");
      }
      break;

    case "registerContraseña":
      if(expresionesRegulares.contraseña.test(e.target.value)){
        document.getElementById("registerContraseña").classList.add("correcto");
        document.getElementById("registerContraseña").classList.remove("incorrecto");
      } else {
        document.getElementById("registerContraseña").classList.add("incorrecto");
        document.getElementById("registerContraseña").classList.remove("correcto");
      }
      break;

    case "registerConfirmarCont":
      if (expresionesRegulares.contraseña.test(e.target.value)) {
        document.getElementById("registerConfirmarCont").classList.add("correcto");
        document.getElementById("registerConfirmarCont").classList.remove("incorrecto");
      } else {
        document.getElementById("registerConfirmarCont").classList.add("incorrecto");
        document.getElementById("registerConfirmarCont").classList.remove("correcto");
       
      }
      break;

    default:
      break;
  }
}
