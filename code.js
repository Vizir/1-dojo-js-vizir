/*
Jokenpo é uma brincadeira japonesa, onde dois 
jogadores escolhem um dentre três possíveis 
itens: Pedra, Papel ou Tesoura.
O objetivo é fazer um juiz de Jokenpo que 
dada a jogada dos dois jogadores informa o 
resultado da partida.
As regras são as seguintes:
Pedra empata com Pedra e ganha de Tesoura
Tesoura empata com Tesoura e ganha de Papel
Papel empata com Papel e ganha de Pedra
*/

function jokenpo(player1, player2) {
  result = 1

  if(player1 == player2)
    result = 0

  else if (player1 == 'tesoura' && player2 == 'pedra' ||
    player1 == 'papel' && player2 == 'tesoura' ||
    player1 == 'pedra' && player2 == 'papel')
    result = 2

  return result
}