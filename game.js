let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let colorPlayer = "green";
let colorGoblin = "red";

let player = new Jogador("Herói", 100, 0, 100, 70, 70, colorPlayer);
let goblin = new Inimigo("Goblin", 400, 200, 20, 70, 70, colorGoblin);
canvas.width = 600;
canvas.height = 400;
window.onload = desenharFase();
function desenharFase() {
    player.desenhar();
    goblin.desenhar();
    colisao();
}
document.addEventListener("keydown", function (event) {
    if (event.key == "w") player.mover(0, 5);
    if (event.key == "s") player.mover(0, -5);
    if (event.key == "a") player.mover(-5, 0);
    if (event.key == "d") player.mover(5, 0);
    desenharFase();
})

function colisao() {
    if (player.x < goblin.x + goblin.tamanho &&
        player.x + player.tamanho > goblin.x &&
        player.y < goblin.y + goblin.tamanho &&
        player.y + player.tamanho > goblin.y) {
        player.x -= 20;
        player.y -= 20;
        hud.hudDamage();
        desenharFase();
    }
}