var state = new GameState({ maxhp: 5, hp: 5, coins: 0 });
var hudView = new HudView({
    state,
    heartsEl: document.getElementById("hearts"),
    coinsEl: document.getElementById("coin-count")
});


class Hud {
    damage() { gamestate.damage(); }
    restore() { gamestate.heal(); }
    reset() { gamestate.reset(); }
    addCoin() { gamestate.addCoins(); }
}