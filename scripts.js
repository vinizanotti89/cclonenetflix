// - Variável - Uma parte a memória do computador para guardar o que quiser
// - Funções - Pedaço de código que só executa quando é chamado
// - DOCUMENT - HTML
// - querySelector - (Selecionar ou pegar um item do HTML)
//addEventListener - Vizinha fofoqueira (Ouvindo alguém e te connta quando algo acontecer)

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom)


function ligaSom(){
    video.muted = !video.muted 
}



botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
   
    modal.style.display = "block"
}
function esconderModal(){
    modal.style.display = "none"
}

// Window - site

window.addEventListener("load", tocarAudio)

function tocarAudio() {
    audio.play()
}