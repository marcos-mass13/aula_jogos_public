class Entidade {
  constructor(nome, x, y, vida) {
    this.nome = nome;
    this.x = x;
    this.y = y;
    this.vida = vida;
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(`${this.nome} se moveu para (${this.x}, ${this.y})`);
  }
}
