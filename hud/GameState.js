class GameState {
    constructor({ maxhp = 5, hp = 5, coins }) {
        this.maxhp = maxhp;
        this.hp = hp;
        this.coins = coins;
    }

    damage(valor = 1) {
        this.hp = Math.max(0, this.hp - valor);
    }
    heal(valor = 1) {
        this.hp = Math.max(0, this.hp + valor);
    }
    reset(){
        this.hp = this.maxhp;
        this.coins = 0;
    }
    addCoin(valor =1){
        this.coins += valor;
    }
}