import Player from './player';

test('is not active by default', () => {
  const player = new Player('Player 1', 'Human');
  expect(player.isActive()).toBe(false);
});
