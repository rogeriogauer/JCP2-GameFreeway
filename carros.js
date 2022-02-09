//-------Codigo dos carros-------
//Variaveis dos carros.
let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [42, 96, 147, 205, 254, 307];
let cCarros = [70, 70, 70, 70, 70, 70];
let lCarros = [30, 30, 30, 30, 30, 30 ];
let vCarros = [7.9, 5.6, 4.2, 6.1, 7.2, 5.3];
let i;

//Funcoes dos carros.
function mostrarCarros(){
  for(i = 0; i < imagensCarros.length; i++){
     image(imagensCarros[i], xCarros[i], yCarros[i], cCarros[i], lCarros[i]);  
  }
}

function movimentarCarros(){
  for(i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= vCarros[i];
  }
}

function voltarPosicaoInicialDosCarros(){
  for(i = 0; i < imagensCarros.length; i++){
    if(passouPelaEstrada(xCarros[i])){
      xCarros[i] = 500;
    }
  }
}

function passouPelaEstrada(xCarros){
  return xCarros < -90;
}