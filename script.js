// Pega os elementos HTML
const menu = document.getElementById("menu");
const fase = document.getElementById("fase");
const btnJogar = document.getElementById("btnJogar");
const btnVoltar = document.getElementById("btnVoltar");

// Quando clicar em "Jogar"
btnJogar.addEventListener("click", () => {
  // menu.classList.add("oculto"); // esconde o menu
  // fase.classList.remove("oculto"); // mostra a fase
  window.location.href = "fase1.html";
});

// Quando clicar em "Voltar ao Menu"
btnVoltar.addEventListener("click", () => {
  fase.classList.add("oculto"); // esconde a fase
  menu.classList.remove("oculto"); // mostra o menu
});
