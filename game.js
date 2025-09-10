const canvas = document.getElementById('idCanvas');
const ctx = canvas.getContext('2d');
const img2 = document.getElementById('idCanvas');

canvas.width = 800;
canvas.height = 600;

let imgGoblin = 'red';
let imgJogador = 'green';

let player = new Jogador("Herói", 100, 0, 100, 70, 70, imgJogador);
let goblin = new Inimigo("Goblin", 400, 200, 20, 70, 70, imgGoblin);

let acoes = [];
acoes.push("mover_direita");
acoes.push("mover_cima");
acoes.push("atacar");

while (acoes.length > 0) {
    let acao = acoes.shift();
    if (acao === "mover_direita") {
        player.mover(1, 0);
    } else if (acao === "mover_cima") {
        player.mover(0, 1);
    } else if (acao === "atacar") {
        player.atacar(goblin);
    }
}

function desenhar_fase() {
    player.desenharCor();
    goblin.desenharCor();
    ctx.clearRect(0, 0, ctx.width, ctx.height);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "w") {
        player.x++;
        console.log('moveu para cima!');
        desenhar_fase();
    }

    if (event.key === "s") {
        player.y++;
        console.log('moveu para baixo!');
        desenhar_fase();
    }

    // tente fazer para os lados (direita e esquerda)!
})


// setInterval(desenhar_fase, 2000);