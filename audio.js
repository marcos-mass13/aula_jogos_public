// const btnVoltar = document.getElementById('btnVoltar');
// btnVoltar.addEventListener('click', () => { window.location.href = "index.html"; });

const musicaFundo = document.getElementById("musicaFundo");

// musicaFundo.play().cath(() => { console.log("erro"); });
const somPulo = document.getElementById("somPulo");
const somTiro = document.getElementById("somTiro");
document.addEventListener("keydown", (event) => {
    mfPlay()
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

// window.onload = mfPlay(); incorreto 
window.onload = mfPlay;

function mfPlay() {
    // musicaFundo.currentTime = 0;
    musicaFundo.play();
}