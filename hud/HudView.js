// Classe que desenha o HUD na tela
class HudView {
  constructor({ state, heartsEl, coinsEl }) {
    this.state = state;
    this.heartsEl = heartsEl;
    this.coinsEl = coinsEl;

    // sempre que o estado mudar, redesenha
    this.state.onChange(() => this.render());

    // render inicial
    this.render();
  }

  render() {
    this.renderHearts();
    this.renderCoins();
  }

  // Desenha corações da vida
  renderHearts() {
    this.heartsEl.innerHTML = "";
    for (let i = 0; i < this.state.maxHp; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      if (i >= this.state.hp) heart.classList.add("empty");
       heart.innerHTML = `
          <img 
            src="/heart.png" 
            alt="Coração"
            style="width: 50px; height: 50px;"
          >
        `;
      this.heartsEl.appendChild(heart);
    }
  }

  // Atualiza quantidade de moedas
  renderCoins() {
    this.coinsEl.textContent = this.state.coins;
  }
}
