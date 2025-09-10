class Entidade {
  constructor(nome, x, y, vida, width, height, img) {
    this.nome = nome;
    this.x = x;
    this.y = y;
    this.vida = vida;
    this.img = img;
    this.width = width;
    this.height = height;
  }

  desenharCor() {
    ctx.fillStyle = this.img;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    console.log('cor');
  }

  desenharImg() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    console.log('img');
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(`${this.nome} se moveu para (${this.x}, ${this.y})`);
  }
}
