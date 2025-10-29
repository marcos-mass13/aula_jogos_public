var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");


let player = new Jogador("Herói", 100, 0, 100, 70, 70, "green");
let goblin = new Inimigo("Goblin", 400, 200, 20, 70, 70, "red");

canvas.width = 600;
canvas.height = 400;

let hub = new Hud();

window.onload = desenhar();



function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.desenhar();
    goblin.desenhar();
}

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === "d") player.mover(5, 0);
    if (event.key === "a") player.mover(-5, 0);
    if (event.key === "w") player.mover(0, -5);
    if (event.key === "s") player.mover(0, 5);
})

function colisao() {
    if (player.x < goblin.x + goblin.width &&
        player.x + player.width > goblin.width &&
        player.y < goblin.y + goblin.width &&
        player.y + player.width > goblin.width)        
        {
            player.vida -= 20;
            hub.damage();
            player.x -=20;
            player.y -=20;
            desenhar();
        }

}

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
