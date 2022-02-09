//------Codigo do jogo-------
function setup(){
  createCanvas(500, 380);
  somTrilha.loop();
}

function draw(){
  background(imagemEstrada);  
  mostrarCao();
  movimentarCao();
  mostrarCarros();
  movimentarCarros();
  voltarPosicaoInicialDosCarros();
  verificarColisao();
  mostrarPontos();
  marcarPontos();
}