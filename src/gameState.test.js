import GameState from './gameState';
import Player from './player';

test('switches player', () => {
  const player1 = new Player('Zerus', 'human1');
  const player2 = new Player('AItron3000', 'ai');
  const gameState = new GameState('multi', player1, player2);
  player1.active = true;

  expect(gameState.switchPlayer()).toBe('Player 2 turn');
  expect(gameState.switchPlayer()).toBe('Player 1 turn');
});
