let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext("2d");

let colorPlayer = "green";
let colorGoblin = "red";
canvas.width = 600;
canvas.heighth = 400;

let player = new Jogador("Herói", 100, 0, 100, 70, 70, colorPlayer);
let goblin = new Inimigo("Goblin", 400, 200, 20, 200, 200, colorGoblin);

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


function desenharFase() {
    player.desenharCor();
    goblin.desenharCor();
}

setInterval(desenharFase, 1000);