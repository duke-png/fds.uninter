let botao = document.querySelector("#botao");
botao.style.background="#e4b662";
    let estaQuebrado=false;

botao.addEventListener("mouseover", e =>{
    if(estaQuebrado===false)
    botao.style.background="#ff6600";
});

botao.addEventListener("mouseout", e =>{
        if(estaQuebrado===false)
    botao.style.background="#e4b662";
});

botao.addEventListener("click", e =>{
    botao.style.background="red";
    botao.innerHTML="oops!";
    estaQuebrado=true;
});

function mostrarMensagem() {
    document.getElementById("mensagem").textContent = "Esqueça as derrotas do passado e comece a pensar nas do futuro! 🌟";
}