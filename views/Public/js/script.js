// function Personas(nombre,edad,estatura,color){
//     this.nombre=nombre
//     this.edad=edad
//     this.estatura=estatura
//     this.color=color

//     this.moverse=function(nombre)
//     {console.log(this.nombre=nombre+" se ha movido");}

//     this.expresarse=function()
//     {console.log("Expresado");}
// }
// let personaUno=new Personas('Roberto',18,1.65,'Blanco');
// let personaDos=new Personas('Carlos',18,1.90,'Blanco');
// let personaTres=new Personas('Cristian',18,1.58,'Moreno');

// console.log(personaUno, personaDos)

// personaUno.moverse()
// personaDos.expresarse()
// personaTres.expresarse()

let personas = {
  nombre: "Juan",
  apellido: "Bolaños",
  edad: 19,
  moverse: function () {
    console.log("Se ha movido");
  },

  direcion: {
    calle: 23,
    carrera: 23,
    interior: 20,
  },
};

let formularioLogin = document.getElementById("form-login");

let formularioRegister = document.querySelector("#form-register");

document
  .querySelector("#btnFormRegistro")
  .addEventListener("click", function(){
    document.querySelector("#form-login").style.display = "flex";
    document.querySelector("#form-register").style.display = "none";
  });

document.querySelector("#btnFormLogin").addEventListener("click",function(){
  document.querySelector("#form-login").style.display = "none";
  document.querySelector("#form-register").style.display = "flex";
});

let inputs =document.getElementsByTagName("input");
for(let index=0; index< inputs.length; index++){
    inputs[index].addEventListener("keyup", validarFormulario)
}

function validarFormulario(e){
    switch(e.target.name){
        case "login-usuario":
            console.log("Este es el formulario de login Usuario");
            break;
        case "login-contraseña":
            console.log("Este es el formulario de login contraseña");
        case  "registerNombre":
            console.log("Este es el formulario de registro usuario");
            break;
        case "register":

        default:
            break;

    }
}


// let array=['Kaval', true, function(){}, {nombre: 'Kaval'}, arrays=[]]

// console.log(array)
