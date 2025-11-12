class GameState {
    constructor({ maxhp = 5, hp = 5, coins }) {
        this.maxhp = maxhp;
        this.hp = hp;
        this.coins = coins;
        this.listeners = [];  // funções que reagem a mudanças
    }
    // Registrar quem vai "escutar" mudanças de estado
    onChange(callback) {
        this.listeners.push(callback);
    }
    // Dispara atualização para todos ouvintes
    notify() {
        this.listeners.forEach(cb => cb(this));
    }
    damage(valor = 1) {
        this.hp = Math.max(0, this.hp - valor);
        this.notify();
    }
    heal(valor = 1) {
        this.hp = Math.max(0, this.hp + valor);
        this.notify();
    }
    reset() {
        this.hp = this.maxhp;
        this.coins = 0;
        this.notify();
    }
    addCoins(valor = 1) {
        this.coins += valor;
        this.notify();
    }
}