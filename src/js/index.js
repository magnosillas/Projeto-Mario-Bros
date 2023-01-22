const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const botaoFechar = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const url = video.src;

function fecharModal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
    fecharModal();
    video.setAttribute('src', url);
});

botaoFechar.addEventListener('click', () => {
    fecharModal();
    video.setAttribute('src', '');
    });