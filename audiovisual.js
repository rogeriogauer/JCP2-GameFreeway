//-------Codigo audiovisual------
//Variaveis das sons.
let somColisao;
let somPontuar;
let somTrilha;

//Variaveis das imagens.
let imagemEstrada;
let imagemCao;
let imagensCarros;

//Funcao audiovisual.
function preload(){
  somColisao = loadSound("sons/colisao.mp3");
  somPontuar = loadSound("sons/pontuar.wav");
  somTrilha = loadSound("sons/trilha.mp3");
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemCao = loadImage("imagens/cao.png");  
  imagensCarros = [loadImage("imagens/carro1.png"), loadImage("imagens/carro2.png"), loadImage("imagens/carro3.png"), loadImage("imagens/carro1.png"), loadImage("imagens/carro2.png"), loadImage("imagens/carro3.png")];
}