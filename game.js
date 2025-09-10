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
