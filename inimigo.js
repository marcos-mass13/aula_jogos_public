class Inimigo extends Entidade {
  atacar(jogador) {
    jogador.vida -= 10;
    console.log(`${this.nome} atacou ${jogador.nome}! Vida do jogador: ${inimigo.vida}`);
  }
}
