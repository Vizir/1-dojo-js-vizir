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

/* 
 0 - Empate
 1 - Player 1
 2 - Player 2
*/

test('Player 1 empata com Player 2', function() {
  strictEqual(jokenpo('pedra', 'pedra'), 0, 'Pedra / Pedra = Empate' );
  strictEqual(jokenpo('tesoura', 'tesoura'), 0, 'Tesoura / Tesoura = Empate' );
  strictEqual(jokenpo('papel', 'papel'), 0, 'Papel / Papel = Empate' );
});

test('Player 1 ganha do Player 2', function() {
  strictEqual(jokenpo('pedra', 'tesoura'), 1, 'Pedra / Tesoura = Player 1')
  strictEqual(jokenpo('tesoura', 'papel'), 1, 'Tesoura / Papel = Player 1')
  strictEqual(jokenpo('papel', 'pedra'), 1, 'Papel / Pedra = Player 1')
});

test('Player 2 ganha do Player 1', function() {
  strictEqual(jokenpo('tesoura', 'pedra'), 2, 'Tesoura / Pedra = Player 2')
  strictEqual(jokenpo('papel', 'tesoura'), 2, 'Papel / Tesoura = Player 2')
  strictEqual(jokenpo('pedra', 'papel'), 2, 'Pedra / Papel = Player 2')
});