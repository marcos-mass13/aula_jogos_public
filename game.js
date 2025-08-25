let player = new Jogador("Herói", 0, 0, 100);
let goblin = new Inimigo("Goblin", 0, 0, 20);

let acoes = [];
acoes.push("mover_direita");
acoes.push("mover_cima");
acoes.push("atacar");

while (acoes.length > 0) {
    let acao = acoes.shift();
    if (acao === "mover_direita") {
        player.mover(1, 0);
    } else if (acao === "mover_cima") {
        player.mover();
    } else if (acao === "atacar") {
        player.atacar();
    }
}