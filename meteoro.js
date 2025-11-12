class Meteoro {
    constructor(x, y, cor, tamanho, velocidade) {
        this.x = x;
        this.y = y;
        this.cor = cor;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
    }
    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tamanho / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
    mover(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    atualizar(ctx, player, hud) {
        this.desenhar(ctx);
        player.vida -= 20;
        hud.damage();
    }
}

