//-------Codigo do cao-------
//Variaveis do cao.
let xCao = 10;
let yCao = 350;
let cCao = 33;
let aCao = 25; 
let colidir = false;
let pontos = 0;
let xPontos = 250;
let yPontos = 24.5;

//Funcoes do cao.
function mostrarCao(){
  image(imagemCao, xCao, yCao, cCao, aCao); 
}

function movimentarCao(){
  if(keyIsDown(UP_ARROW)){
     yCao -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yCao += 3;
    }
  }
}

function podeSeMover(){
  return yCao < 350;
}

function verificarColisao(){
  for(i = 0; i < imagensCarros.length; i++){
   colidir = collideRectRect(xCarros[i], yCarros[i], cCarros[i], lCarros[i], xCao, yCao, cCao, aCao);
    if(colidir){
       somColisao.play();
       voltarParaPosicaoInicial();
      if(pontosMaiorDoQueZero()){
        pontos -= 1;
      }
    }    
  }
}

function voltarParaPosicaoInicial(){
  yCao = 350;
}

function pontosMaiorDoQueZero(){
  return pontos > 0; 
}

function mostrarPontos(){
  fill(color(16, 41, 202));
  text(pontos, xPontos, yPontos);
  textSize(20);   
}

function marcarPontos(){
  if(yCao <= 5 ){
    pontos += 1;
    somPontuar.play();
    voltarParaPosicaoInicial();    
  }
}