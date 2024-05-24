import Player from './player';
import GameState from './gameState';
import Gameboard from './gameboard';

test('player1.gameboard builds 10x10 board map', () => {
  const board = new Gameboard();
  expect(board.buildBoard()).toBe(true);
});

describe('player1.gameboard', () => {
  let player1;
  let player2;
  let gameState;

  beforeEach(() => {
    gameState = new GameState();
    player1 = new Player('Zerus', 'human1', new Gameboard(gameState));
    player2 = new Player('AItron3000', 'ai', new Gameboard(gameState));
    gameState.player1 = player1;
    gameState.player2 = player2;
    player1.gameboard.buildBoard();
    player2.gameboard.buildBoard();
  });

  test('places a ship of specified length', () => {
    expect(player1.gameboard.placeShip(1, ['A1'])).toStrictEqual(['A1']);
    expect(player1.gameboard.placeShip(2, ['B4', 'B5'])).toStrictEqual(['B4', 'B5']);
    expect(player1.gameboard.placeShip(3, ['C4', 'D4', 'E4'])).toStrictEqual(['C4', 'D4', 'E4']);
    expect(player1.gameboard.placeShip(4, ['F1', 'F2', 'F3', 'F4'])).toStrictEqual(['F1', 'F2', 'F3', 'F4']);
    expect(player1.gameboard.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7'])).toStrictEqual(['A7', 'B7', 'C7', 'D7', 'E7']);
  });

  test('does not place ship in occupied square', () => {
    player1.gameboard.placeShip(3, ['C4', 'D4', 'E4']);
    expect(player1.gameboard.placeShip(3, ['C2', 'C3', 'C4'])).toBe(null);
  });

  test('does not place ship out of board bounds', () => {
    expect(player1.gameboard.placeShip(4, ['C8', 'C9', 'C10', 'C11'])).toBe(null);
    expect(player1.gameboard.placeShip(4, ['I8', 'J8', 'K8', 'L8'])).toBe(null);
  });

  test('receives ship attack', () => {
    player1.gameboard.placeShip(1, ['A1']);
    expect(player1.gameboard.receiveAttack('A1')).toBe('H');

    player1.gameboard.placeShip(3, ['C4', 'D4', 'E4']);
    expect(player1.gameboard.receiveAttack('C4')).toBe('H');
    expect(player1.gameboard.receiveAttack('D4')).toBe('H');
    expect(player1.gameboard.receiveAttack('E4')).toBe('H');
  });

  test('received attacks increase hits in the ship', () => {
    player1.gameboard.placeShip(1, ['A1']);
    player1.gameboard.receiveAttack('A1');
    expect(player1.gameboard.board.get('A1').ship.hits).toBe(1);

    player1.gameboard.placeShip(3, ['C4', 'D4', 'E4']);
    player1.gameboard.receiveAttack('C4');
    player1.gameboard.receiveAttack('D4');
    player1.gameboard.receiveAttack('E4');
    expect(player1.gameboard.board.get('C4').ship.hits).toBe(3);
  });

  test('receives miss attack', () => {
    expect(player1.gameboard.receiveAttack('G4')).toBe('M');
    expect(player1.gameboard.receiveAttack('G9')).toBe('M');
    expect(player1.gameboard.receiveAttack('J10')).toBe('M');
  });

  test('misses are stored', () => {
    player1.gameboard.receiveAttack('I1');
    expect(player1.gameboard.board.get('I1').status).toBe('M');
  });

  test('receiveAttack() can handle attack at the same square', () => {
    player1.gameboard.placeShip(1, ['A1']);
    player1.gameboard.receiveAttack('A1');
    expect(player1.gameboard.receiveAttack('A1')).toBe('H');
  });

  test('game ends when all ships are sunk', () => {
    player1.gameboard.placeShip(1, ['A1']);
    player1.gameboard.placeShip(3, ['C4', 'D4', 'E4']);
    player1.gameboard.receiveAttack('A1');
    player1.gameboard.receiveAttack('C4');
    player1.gameboard.receiveAttack('D4');
    player1.gameboard.receiveAttack('E4');
    expect(player1.gameboard.gameState.isGameOver).toBe(true);
  });
});
