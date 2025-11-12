class Entidade {
  constructor(nome, x, y, vida, h, w, cor, image) {
    this.nome = nome;
    this.x = x;
    this.y = y;
    this.vida = vida;
    this.h = h;
    this.w = w;
    this.cor = cor;
    this.image = image;
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    // console.log(`${this.nome} se moveu para (${this.x}, ${this.y})`);
  }

  desenhar() {
    // ctx.fillStyle = this.cor
    // ctx.fillRect(this.x,this.y,this.h,this.w); 
    ctx.drawImage(this.image, this.x, this.y);
  }

}
