class Entidade {
  constructor(nome, x, y, vida, altura, base, cor) {
    this.nome = nome;
    this.x = x;
    this.y = y;
    this.vida = vida;
    this.altura = altura;
    this.base = base;
    this.cor = cor;
  }

  desenharCor(){
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x,this.y,this.altura,this.base);
  }

  mover(dx, dy) {
    this.x += dx;
    this.y += dy;
    console.log("mover");
  }
}
