var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// Criando personagens
let colorPlayer = "green";
let tamanho = 70;
let player = new Jogador("Herói", 10, 10, 100, tamanho, tamanho, colorPlayer);

let hub = new Hud();

let projeteis = [];

window.onload = desenharCena();

function desenharCena() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = projeteis.length - 1; i >= 0; i--) {
    let p = projeteis[i];
    console.log("numero de tiros: "+projeteis.length);
    p.desenhar();

    // mover o projetil
    p.x += p.velocidade;

    // remover se sair da tela
    if (p.x > canvas.width) {
      projeteis.splice(i, 1);
      continue;
    }

  }
  
  player.desenhar();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "d") player.mover(5, 0);
  if (event.key === "a") player.mover(-5, 0);
  if (event.key === "w") player.mover(0, -5);
  if (event.key === "s") player.mover(0, 5);
  if (event.code === "Enter") atirar();
  desenharCena();
  gameOver();
})


function gameOver() {
  if (player.vida <= 0) {
    alert("Game Over! O jogador foi derrotado.");
    window.location.reload();
  }
}


function atirar() {
  let projetil = new Projetil(
    player.x + player.h,
    player.y + player.w / 2 + 10,
    "yellow",
    10,
    10);
  projetil.desenhar();

  projeteis.push(projetil);

}
