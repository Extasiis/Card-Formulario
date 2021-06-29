//Selector form id
const cardForm = document.querySelector("#card-form");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const btnEmail = document.querySelector("#enviar-email");

//Selector class
const cardRigth = document.querySelector(".card__rigth");
const cardLeft = document.querySelector(".card__left");
const spinner = document.querySelector(".sk-chase");
const titleLeft = document.querySelector(".card__left-title");
const listLeft = document.querySelector(".card__lista");
const icoLeft = document.querySelector(".card__left-header-ico");

//expresion
const exp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

addEventListener();
function addEventListener() {
  document.addEventListener("DOMContentLoaded", cargandoPage);
  email.addEventListener("blur", validacionForm);
  asunto.addEventListener("blur", validacionForm);
  mensaje.addEventListener("blur", validacionForm);
  cardForm.addEventListener("submit", validacionFinal);
}

//Funciones
function cargandoPage() {
  cardRigth.style.margin = "0";
  btnEmail.disabled = true;
  btnEmail.classList.add("disabled");
}

function validacionForm(e) {
  validacion(e);

  if (e.target.value.length < 1) {
    e.target.style.borderBottom = "2px solid red";
    mostrarError("Todos los capos con obligatorio");
  } else {
    e.target.style.borderBottom = "1px solid #2b2490";
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
  }
}

function validacion(e) {
  if (e.target.type === "email") {
    if (exp.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.style.borderBottom = "1px solid #2b2490";
    } else {
      e.target.style.borderBottom = "2px solid red";
      mostrarError("El Email es invalido");
    }
  }

  if (exp.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEmail.disabled = false;
    btnEmail.classList.remove("disabled");
  }
}

function mostrarError(mens) {
  const errParrafo = document.createElement("p");
  errParrafo.textContent = mens;
  errParrafo.classList.add("error");

  const mensajeError = document.querySelectorAll(".error");

  if (mensajeError.length === 0) {
    cardRigth.appendChild(errParrafo);
  }
}

function validacionFinal(e) {
  e.preventDefault();
  time1();
  setTimeout(() => {
    time2();
    setTimeout(() => {
      time3();
      setTimeout(() => {
        time4();
      }, 1000);
    }, 5000);
  }, 3000);
}

//Times
function time1() {
  btnEmail.classList.add("desaparecer");
  spinner.style.display = "flex";
}

function time2() {
  cardLeft.classList.add("left-check");
  cardLeft.classList.add("disolver");
  titleLeft.textContent = "Pronto te respondere";
  listLeft.style.display = "none";
  btnEmail.style.left = "40%";
  icoLeft.src = "img/ico-programador.svg";
}

function time3() {
  spinner.style.display = "none";
  btnEmail.classList.add("check");
}

function time4() {
  btnEmail.classList.remove("check");
  btnEmail.classList.remove("desaparecer");
  cardLeft.classList.remove("left-check");
  cardLeft.classList.remove("disolver");
  titleLeft.textContent = "Envia Nuevo Mail";
  listLeft.style.display = "grid";
  btnEmail.style.left = "28%";
  icoLeft.src = "img/ico-mensaje.svg";
  restaurar();
}

function restaurar() {
  cardForm.reset();

  cargandoPage();
}
