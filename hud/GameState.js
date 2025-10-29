class GameState {
    constructor({ maxhp = 5, hp = 5, coins = 0 } = {}) {
        this.maxhp = maxhp;
        this.hp = hp;
        this.coins = coins;
    }

    damage(i = 1) {
        this.hp = Math.max(0, this.hp - i);
    }

    heal(i = 1) {
        this.hp = Math.min(this.maxhp, this.hp + i);
    }

    reset(){
        this.hp = this.maxhp;
        this.coins = 0;
    }
    
    addCoins(i=1){
        this.coins +=i;
    }
}