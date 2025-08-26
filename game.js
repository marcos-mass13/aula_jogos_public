// Criando personagens
let player = new Jogador("Herói", 0, 0, 100);
let goblin = new Inimigo("Goblin", 5, 5, 50);

// Fila de ações (FIFO)
let acoes = [];
acoes.push("mover_direita");
acoes.push("mover_direita");
acoes.push("mover_cima");
acoes.push("mover_cima");
acoes.push("mover_cima");
acoes.push("atacar");
acoes.push("atacar");
acoes.push("atacar");


// Pilha de movimentos (LIFO)
let historicoMovimentos = [];

console.log("\n--- Execução das ações (Fila) ---");
while (acoes.length > 0) {
  let acao = acoes.shift(); // remove o primeiro da fila
  if (acao === "mover_direita") {
    player.mover(1, 0);
    historicoMovimentos.push("esquerda");
  } else if (acao === "mover_cima") {
    player.mover(0, 1);
    historicoMovimentos.push("baixo");
  } else if (acao === "atacar") {
    player.atacar(goblin);
  }
}

// console.log("\n--- Desfazendo movimentos (Pilha) ---");
// while (historicoMovimentos.length > 0) {
//   let desfazer = historicoMovimentos.pop();
//   if (desfazer === "esquerda") {
//     player.mover(-1, 0);
//   } else if (desfazer === "baixo") {
//     player.mover(0, -1);
//   }
// }