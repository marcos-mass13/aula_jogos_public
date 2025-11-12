var state = new GameState({ maxhp: 5, hp: 5, coins: 0 });
new HudView({
    state,
    heartsEl: document.getElementById("hearts"),
    coinsEl: document.getElementById("coin-count")
});


class Hud {
    damage() { state.damage(); }
    restore() { state.heal(); }
    reset() { state.reset(); }
    addCoin() { state.addCoins(); }
}