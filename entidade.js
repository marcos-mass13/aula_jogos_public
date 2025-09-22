class Entidade {
  constructor(nome, x, y, vida,h,w,cor) {
    this.nome = nome;
    this.x = x;
    this.y = y;
    this.vida = vida;
    this.h = h;  
    this.w = w;  
    this.cor = cor;  
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log(`${this.nome} se moveu para (${this.x}, ${this.y})`);
  }

  desenhar(){
    ctx.fillStyle = this.cor
    ctx.fillRect(this.x,this.y,h,w);
  }

}
