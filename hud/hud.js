const state = new GameState({maxHp:5,hp:5,coins:0});
new HudView({
    state,
    heartsEl:document.getElementById("hearts"),
    coinsEl:document.getElementById("coins-count"),
});

class Hud{
    hudDamage(){
        state.damage();
    }
    hudHeal(){
        state.heal();
    }
    hudAddCoins(){
        state.addCoins();
    }
    hudReset(){
        state.reset();
    }
}