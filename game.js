var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

// Criando personagens
let colorPlayer = "green";
let tamanho = 70;
const imgPlayer = new Image();
imgPlayer.src = 'img/player.png';
let player = new Jogador("Nave", 0, 0, 100, tamanho, tamanho,colorPlayer, imgPlayer);


let hud = new Hud();

let projeteis = [];
let meteoros = [];

window.onload = desenharCena;

function desenharCena() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.desenhar();   

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

    // ======== Colisão com Meteoros ========
    for (let j = meteoros.length - 1; j >= 0; j--) {
      let m = meteoros[j];
      if (
        p.x < m.x + m.tamanho &&
        p.x + p.tamanho > m.x &&
        p.y < m.y + m.tamanho &&
        p.y + p.tamanho > m.y
      ) {
        // Remove o projetil e o meteoro
        projeteis.splice(i, 1);
        meteoros.splice(j, 1);
        p.atualizar(ctx, hud);
        // hud.hudaddCoins();

        break; // Sai do loop dos meteoros para evitar erro de índice
      }
    }
  }

  // ======== Meteoros ========
  for (let i = meteoros.length - 1; i >= 0; i--) {
    let m = meteoros[i];
    // console.log("numero de meteoros: "+meteoros.length);
    m.desenhar();

    // Move o meteoro
    m.x -= m.velocidade;

    // Remove se sair da tela
    if (m.x + m.tamanho < 0) {
      meteoros.splice(i, 1);
      continue;
    }

    // Colisão com o jogador
    if (
      player.x < m.x + m.tamanho &&
      player.x + player.w > m.x &&
      player.y < m.y + m.tamanho &&
      player.y + player.h > m.y
    ) {
      console.log("Jogador atingido por meteoro!");
      m.atualizar(ctx, player, hud);
      meteoros.splice(i, 1);
      continue;
    }
  }

}

document.addEventListener("keydown", function (event) {
  if (event.key === "d") player.mover(5, 0);
  if (event.key === "a") player.mover(-5, 0);
  if (event.key === "w") player.mover(0, -5);
  if (event.key === "s") player.mover(0, 5);
  if (event.code === "Enter") atirar();
  if (event.key === "h") hud.restore();
  if (event.key === "j") hud.damage();
  if (event.key === "k") hud.addCoin();
  if (event.key === "l") hud.reset();

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

// Cria meteoros vindo da direita para a esquerda
function spawnMeteoro() {
  let meteoro = new Meteoro(
    canvas.width + 40,
    Math.random() * (canvas.height - 60),
    "orange",
    40,
    3 + Math.random() * 3);

  meteoro.desenhar();
  meteoros.push(meteoro);
}

// Cria meteoros automaticamente a cada intervalo
setInterval(() => {
  spawnMeteoro();
}, 1500); // a cada 1,5 segundos

setInterval(() => {
  desenharCena();
  gameOver();
}, 30); // Atualiza a cada 30 ms
