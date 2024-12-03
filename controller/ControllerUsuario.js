//Se elimino la importaion de la captura de datos debido a que no se necesitaba

//Variable del URL
let urlUsuarios = "http://localhost:3000/modelUsuario";
let usuarios = [];

function getUsuarios() {
  fetch(urlUsuarios)
    .then((response) => response.json())
    .then((data) => {
      usuarios = data;
    })
    .catch((error) => console.log(error));
}

getUsuarios();
//Programacion asincrona-->Investigar

export function login() {
  let loginUsuario = document.getElementById("login-usuario").value;
  let loginContraseña = document.getElementById("login-contraseña").value;

  usuarios.some(function (index) {
    if (loginUsuario == index.usuario && loginContraseña == index.contraseña) {
      // let timerInterval;
      // Swal.fire({
      //   title: " Bienvenido: " + index.nombre,
      //   html: "Serás redirigido en: <b></b> milliseconds.",
      //   timer: 3000,
      //   icon: "success",
      //   timerProgressBar: true,
      //   didOpen: () => {
      //     Swal.showLoading();
      //     const timer = Swal.getPopup().querySelector("b");
      //     timerInterval = setInterval(() => {
      //       timer.textContent = `${Swal.getTimerLeft()}`;
      //     }, 100);
      //   },
      //   willClose: () => {
      //     clearInterval(timerInterval);
      //     window.location.href = "/views/Public/pages/ViewCredito.html";
      //   },
      // }).then((result) => {
      //   /* Read more about handling dismissals below */
      //   if (result.dismiss === Swal.DismissReason.timer) {
      //     console.log("I was closed by the timer");
      //   }
      // });
      let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent =`${Swal.getTimerLeft()}`;
    }, 1000);
  },
  willClose: () => {
    clearInterval(timerInterval);
    window.location.href="../views/Public/pages/ViewCredito.html"
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
    } else {
      Swal.fire({
        title: "Usuario y/o contraseña incorrecta",
        text: "Revisa tu usuario o contraseña, por favor",
        icon: "error",
      });
    }
  });
}

export function register() {
  let registerNombre = document.getElementById("registerNombre").value;
  let registerUsuario = document.getElementById("registerUsuario").value;
  let registerEmail = document.getElementById("registerEmail").value;
  let registerContraseña = document.getElementById("registerContraseña").value;
  let registerConfirmarCont =
    document.getElementById("registerConfirmar").value;

  let newRegistro = {
    nombre: registerNombre,
    usuario: registerUsuario,
    email: registerEmail,
    contraseña: registerContraseña,
    confirmarCont: registerConfirmarCont,
  };
  // usuarios.unshift(newRegistro);
  document.getElementById("form-register").style.display = "none";
  document.getElementById("form-login").style.display = "flex";
  agregarUsuarios(newRegistro)

}

function agregarUsuarios(newRegistro){
  fetch(urlUsuarios,{method:'POST',
    body:JSON.stringify(newRegistro)
  })
}