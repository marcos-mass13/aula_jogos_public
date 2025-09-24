class HudView {
    constructor({ state, heart, coins }) {
        this.state = state;
        this.heart = heart;
        this.coins = coins;

        this.state.onChange(() => this.render());
        this.render();
    }

    render() {

    }

    renderHearts() {
        this.heart.innerHtml = "";
        for (let i = 0; i < this.state.maxHp; i++) {
            const hearts = document.createElement("div");
            hearts.classList.add("heart");
            if (i >= this.state.hp) hearts.classList.add("empty");
            hearts.innerHTML = `
            <svg viewBox="0 0 24 24" fill="red">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-3.04 2.46-5.5 5.5-5.5 1.74 0 3.41 0.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.04 0 5.5 2.46 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>            </svg>
            `;
            this.heart.appenChild(hearts);
        }
    }

    renderCoins() {
        this.coins.textContent = this.state.coins;
    }

}