const state = new GameState({ maxHp: 5, hp: 5, coins: 0 });
new HudView({
    state,
    heart: document.getElementById("hearts"),
    coins: document.getElementById("coin-count"),
});

document.getElementById("btn-damage").onclick = () => state.damage();
document.getElementById("btn-heal").onclick = () => state.heal();
document.getElementById("btn-coin").onclick = () => state.addCoins();
document.getElementById("btn-reset").onclick = () => state.reset();


switch (e.key.toLowerCase()) {
    case "j": state.damage(); break;
    case "h": state.heal(); break;
    case "k": state.addCoins(); break;
    case "l": state.reset(); break;
}
