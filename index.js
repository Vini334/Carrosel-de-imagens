const imagens= document.querySelectorAll('.slide');
const botaoAvancar= document.getElementById('seta-avancar')
const botaoVoltar= document.getElementById('seta-voltar')

let imagemAtual = 0;

botaoAvancar.addEventListener('click', function(){

  if(imagemAtual === imagens.length-1){
    return;
  }
  
  imagemAtual++;
  esconderImagem();
  mostrarImagem();
  mostrarOuEsocnderSetas();
});

botaoVoltar.addEventListener('click', function(){

  if(imagemAtual === 0){
    return;
  }
 
  imagemAtual--;
  esconderImagem();
  mostrarImagem();
  mostrarOuEsocnderSetas();

});

function mostrarImagem() {
  imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagem() {
  const imagemEsconder = document.querySelector('.mostrar')
  imagemEsconder.classList.remove('mostrar')
}

function mostrarOuEsocnderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if(naoEhAPrimeiraImagem){
    botaoVoltar.classList.remove("opacidade");
  } else{
    botaoVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length-1;
  if(chegouNaUltimaImagem) {
    botaoAvancar.classList.add("opacidade");
  } else{
    botaoAvancar.classList.remove("opacidade");
  }
}




