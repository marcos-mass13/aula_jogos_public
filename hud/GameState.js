class GameState {
    constructor({ maxHp = 5, hp = 5, coins = 0 } = {}) {
        this.maxHp = maxHp;
        this.hp = hp;
        this.coins = coins;
    }

    damage(valor = 1) {
        this.hp = Math.max(0, this.hp - valor);
    }
    heal(valor = 1){
        this.hp = Math.min(this.maxHp,this.hp + valor);
    }
    reset(){
        this.hp = this.maxHp;
        this.coins = 0;
    }
    addCoins(valor = 1){
        this.coins += valor;
    }
}