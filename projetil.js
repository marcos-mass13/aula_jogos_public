class Projetil {
    constructor(x, y, cor, tamanho, velocidade) {
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.tamanho, this.tamanho);
        // ctx.drawImage(this.image, this.x, this.y);

    }
    mover(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    atualizar(ctx, hud) {
        this.desenhar(ctx);
        // Colisão com o meteoro
        console.log("Atingiu o meteoro!");
        hud.hudaddCoins();
    }
}

