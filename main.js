function tocarSom(idSom) {
  const som = document.querySelector(idSom);
  som.play();
}

const teclas = document.querySelectorAll(".tecla");

function onClick() {
  const instrumento = "#som_" + this.className.slice(6);
  tocarSom(instrumento);
}
teclas.forEach((tecla) => {
  tecla.addEventListener("click", onClick);
});

// function tocaSom(idSom) {
//   const elemento = document.querySelector(idSom);

//   if (elemento && elemento.localName === "audio") {
//     elemento.play();
//   } else {
//     console.log("Elemento não encontrado ou seletor inválido");
//   }
// }

// const listaDeTeclas = document.querySelectorAll(".tecla");

// for (i = 0; i < listaDeTeclas.length; i++) {
//   const tecla = listaDeTeclas[i];
//   const instrumento = tecla.classList[1];
//   const idInstrumento = `#som_${instrumento}`;

//   tecla.onclick = function () {
//     tocaSom(idInstrumento);
//   };

//   tecla.onkeydown = function (evento) {
//     if (evento.code === "Enter" || evento.code === "Space") {
//       tecla.classList.add("ativa");
//     }

//     tecla.onkeyup = function () {
//       tecla.classList.remove("ativa");
//     };
//   };
// }
