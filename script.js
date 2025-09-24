const menu = document.getElementById("menu");
const fase = document.getElementById("fase");
const btnJogar = document.getElementById("btnJogar");
const btnVoltar = document.getElementById("btnVoltar");

btnJogar.addEventListener("click", () => {
    window.location.href = "fase1.html";
});

btnVoltar.addEventListener("click", () => {
    fase.classList.add("oculto");
    menu.classList.remove("oculto");
})