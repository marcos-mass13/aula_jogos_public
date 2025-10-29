const state = new GameState({ maxhp: 5, hp: 5, coins: 0 });
new HudView({
    state,
    heartsEl: document.getElementById("hearts"),
    coinsEl: document.getElementById("coin-count"),
});

class Hud {
    hudDamage() { state.damage(); }
    hudHeal() { state.heal(); }
    hudAddCoin() { state.addCoins(); }
    hudReset() { state.reset(); }
}