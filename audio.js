const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', () => { window.location.href = "index.html"; });

const musicaFundo = document.getElementById("musicaFundo");
musicaFundo.volume = 0.5;
musicaFundo.play().cath(() => { console.log("erro"); });
const somPulo = document.getElementById("somPulo");
const somTiro = document.getElementById("somTiro");
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        somPulo.currentTime = 0;
        somPulo.play();
        console.log('jogador pulou!');
    } if (event.code === "Enter") {
        somTiro.currentTime = 0;
        somTiro.play();
        console.log("jogador atirou");
    }
})