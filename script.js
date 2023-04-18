let reiniciar= []
let jogada = 0
let jogada1 = 0
let jogada2 = 0


let Btreiniciar = document.getElementById('bt')
let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let resultado1 = document.getElementById('res1')
let resultado2 = document.getElementById('res2')

//atribui valores para bt1 e bt2
bt1.addEventListener('click', function () {

    let numAleatorio = Math.floor(Math.random() * 6) + 1
    resultado1.innerHTML = `Pontos :  <strong> ${jogada1 +=numAleatorio} <\strong> `;
    jogada++
 
    document.getElementById("bt1").textContent = numAleatorio
    bt1.disabled = true
    bt2.disabled = false
    campeao();
  
  
});

bt2.addEventListener('click', function () {
 
    let numAleatorio = Math.floor(Math.random() * 6) + 1
    resultado2.innerHTML = `Pontos :  <strong> ${jogada2 +=numAleatorio} <\strong> `;
    jogada++

    document.getElementById("bt2").textContent = numAleatorio
   bt1.disabled = false
  bt2.disabled = true
   campeao()
   
  
});
let objetos ={
   bt: Btreiniciar,
   bt1: bt1,
   bt2: bt2,
   res1: resultado1,
   res2: resultado2
}
reiniciar.push(objetos)


//limpar 
Btreiniciar.addEventListener('click', function () {

  reiniciar.forEach((objeto) => { //pecorre todo o vetor "reiniciar" e atualiza ele 
  
    objeto.res1.innerHTML = '';
    objeto.res2.innerHTML = '';
    objeto.bt1.innerHTML = 'Jogar dado 1';
    objeto.bt2.innerHTML = 'Jogar dado 2';
    objeto.jogador = 1 //jogador 1 vai jogar ao reiniciar
  });
  jogada = 0
  jogada1 = 0
  jogada2 = 0
  bt1.disabled = false
  bt2.disabled = true


})


//verificar o campeão da partida
  
 function campeao(){

   if(jogada % 2 ===0){
  if (jogada1 > jogada2) {
    alert("Jogador 1 venceu a rodada!");
  } else if (jogada1 < jogada2) {
    alert("Jogador 2 venceu a rodada!");
  } else if(jogada1 === jogada2) {
    alert("Empate na rodada!");
  }
}
if(jogada ===20){
    
  let campeao = document.getElementById('campeao')
  if(jogada1 > jogada2){
    alert('Jogador 1 ganhou o jogo!')
    campeao.innerHTML = 'Você é muito sortudo jogador 1!'
  }else if(jogada2 > jogada1) {
    alert('Jogador 2 ganhou o jogo!')
    campeao.innerHTML= 'Você é muito sortudo jogador 2!'
  }
  else if(jogada1 == jogada2){
    alert('Empate. Vamos de novo?')
    campeao.innerHTML = 'Vocês não tem sorte?'
  }
  bt1.disabled = true
  bt2.disabled = true
}


 }