import GameState from './gameState';
import Player from './player';

test('switches player', () => {
  const player1 = new Player('Shrek', 'human1');
  player1.active = true;
  const player2 = new Player('Terminator', 'ai');
  const gameState = new GameState(player1, player2);

  expect(gameState.switchPlayer()).toBe('Player 2 turn');
  expect(gameState.switchPlayer()).toBe('Player 1 turn');
});
