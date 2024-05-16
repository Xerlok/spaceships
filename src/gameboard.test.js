import Player from './player';
import GameState from './gameState';
import Gameboard from './gameboard';

test('boardOne builds 10x10 board map', () => {
  const boardOne = new Gameboard();
  expect(boardOne.buildBoard()).toBe(true);
});

describe('boardOne', () => {
  let boardOne;
  let boardTwo;
  let player1;
  let player2;
  let gameState;

  beforeEach(() => {
    boardOne = new Gameboard();
    boardTwo = new Gameboard();
    player1 = new Player('Zerus', 'human1', boardOne);
    player2 = new Player('AItron3000', 'ai', boardTwo);
    gameState = new GameState(player1, player2);
    player1.gameboard.gameState = gameState;
    player2.gameboard.gameState = gameState;
    boardOne.buildBoard();
    boardTwo.buildBoard();
  });

  test('places a ship of specified length', () => {
    expect(boardOne.placeShip(1, ['A1'])).toStrictEqual(['A1']);
    expect(boardOne.placeShip(2, ['B4', 'B5'])).toStrictEqual(['B4', 'B5']);
    expect(boardOne.placeShip(3, ['C4', 'D4', 'E4'])).toStrictEqual(['C4', 'D4', 'E4']);
    expect(boardOne.placeShip(4, ['F1', 'F2', 'F3', 'F4'])).toStrictEqual(['F1', 'F2', 'F3', 'F4']);
    expect(boardOne.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7'])).toStrictEqual(['A7', 'B7', 'C7', 'D7', 'E7']);
  });

  test('receives ship attack', () => {
    boardOne.placeShip(1, ['A1']);
    expect(boardOne.receiveAttack('A1')).toBe('H');

    boardOne.placeShip(3, ['C4', 'D4', 'E4']);
    expect(boardOne.receiveAttack('C4')).toBe('H');
    expect(boardOne.receiveAttack('D4')).toBe('H');
    expect(boardOne.receiveAttack('E4')).toBe('H');
  });

  test('received attacks increase hits in the ship', () => {
    boardOne.placeShip(1, ['A1']);
    boardOne.receiveAttack('A1');
    expect(boardOne.board.get('A1').ship.hits).toBe(1);

    boardOne.placeShip(3, ['C4', 'D4', 'E4']);
    boardOne.receiveAttack('C4');
    boardOne.receiveAttack('D4');
    boardOne.receiveAttack('E4');
    expect(boardOne.board.get('C4').ship.hits).toBe(3);
  });

  test('receives miss attack', () => {
    expect(boardOne.receiveAttack('G4')).toBe('M');
    expect(boardOne.receiveAttack('G9')).toBe('M');
    expect(boardOne.receiveAttack('J10')).toBe('M');
  });

  test('misses are stored', () => {
    boardOne.receiveAttack('I1');
    expect(boardOne.board.get('I1').status).toBe('M');
  });

  test('receiveAttack() can handle attack at the same square', () => {
    boardOne.placeShip(1, ['A1']);
    boardOne.receiveAttack('A1');
    expect(boardOne.receiveAttack('A1')).toBe('H');
  });

  test('game ends when all ships are sunk', () => {
    boardOne.placeShip(1, ['A1']);
    boardOne.placeShip(3, ['C4', 'D4', 'E4']);
    boardOne.receiveAttack('A1');
    boardOne.receiveAttack('C4');
    boardOne.receiveAttack('D4');
    boardOne.receiveAttack('E4');
    expect(boardOne.gameState.isGameOver).toBe(true);
  });
});
