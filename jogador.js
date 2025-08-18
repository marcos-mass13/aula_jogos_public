class Jogador extends Entidade {
  atacar(inimigo) {
    inimigo.vida -= 10;
    console.log(`${this.nome} atacou ${inimigo.nome}! Vida do inimigo: ${inimigo.vida}`);
  }
}
