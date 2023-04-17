let reiniciar= []
let jogadas = []
let jogada_Atual = 1
let jogadas_Realizadas = 0
let rodadas = 0
let pontos_Jogador1 = 0
let pontos_Jogador2 = 0

let Btreiniciar = document.getElementById('bt')
let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let resultado1 = document.getElementById('res1')
let resultado2 = document.getElementById('res2')

bt1.addEventListener('click', function () {
  if (jogada_Atual === 1) {
    let numAleatorio = Math.floor(Math.random() * 6) + 1
    resultado1.innerHTML = `Número :  <strong> ${numAleatorio} <\strong> `;
    jogadas_Realizadas++
    pontos_Jogador1 += numAleatorio;
    rodadas++
    campeao()
    if (jogadas_Realizadas % 2 === 0) {
      jogada_Atual = 2
    } else {
      jogada_Atual = 1
    }
    jogada(jogada_Atual)
  }
});

bt2.addEventListener('click', function () {
  if (jogada_Atual === 2) {
    let numAleatorio = Math.floor(Math.random() * 6) + 1
    resultado2.innerHTML = `Número :  <strong> ${numAleatorio} <\strong> `;
    jogadas_Realizadas++
     pontos_Jogador1 += numAleatorio
    rodadas++
    campeao()
    if (jogadas_Realizadas % 2 === 0) {
      jogada_Atual = 2
    } else {
      jogada_Atual = 1
    }
    jogada(jogada_Atual)
  }
});
let objetos ={
   bt: Btreiniciar,
   bt1: bt1,
   bt2: bt2,
   res1: resultado1,
   res2: resultado2
}
reiniciar.push(objetos)


  // gerenciar a vez de cada jogador

Btreiniciar.addEventListener('click', function () {
  
  reiniciar.forEach((objeto) => { //pecorre todo o vetor "reiniciar" e atualiza ele 
    objeto.res1.innerHTML = '';
    objeto.res2.innerHTML = '';
  });
    jogada_Atual = 1
    jogadas_Realizadas = 0
    jogada(jogada_Atual)
  });


function jogada(jogador) {
  for (let i = 0; i < jogadas.length; i++) {
    jogadas[i].disabled = true
  }
  jogadas[jogador - 1].disabled = false
}
  
  let Obj_Jogo = {
    bt1: bt1,
    bt2: bt2
  }
  jogadas.push(Obj_Jogo)

  jogada(jogada_Atual);

// calcular a quantidade de rodadas = 10

function campeao(){
  if(rodadas === 10){
    if(pontos_Jogador1 > pontos_Jogador2){
      alert("Jogador 1 ganhou!!")
    }
    else if(pontos_Jogador1 < pontos_Jogador2){
      alert("Jogador 2 ganhou!!")
    }
    else{
      alert("Empate! Que tal de novo?")
    }
  }
}


  