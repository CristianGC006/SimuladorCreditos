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
      if(expresionesRegulares.nombre.test(e.target.value)){
        console.log("Pasó la validacion");
      } else{console.log("El campo solo permite letras en mayúscula");
      }
      break;
    case "registerUsuario":
      if(expresionesRegulares.usuario.test(e.target.value)){
        console.log("Pasó la validacion");        
      }else{console.log("Solo letras minúsculas, entre 4 y 10 caracteres. ");
      
      }


    default:
      break;
  }
}
