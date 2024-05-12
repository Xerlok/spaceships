import Gameboard from './gameboard';
import Ship from './ship';

test('Gameboard builds 10x10 board map', () => {
  const gameboard = new Gameboard();
  expect(gameboard.buildBoard()).toBe(true);
});

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.buildBoard();
  });

  test('places a ship of specified length', () => {
    expect(gameboard.placeShip(new Ship(1), ['A1'])).toStrictEqual(['A1']);
    expect(gameboard.placeShip(new Ship(2), ['B4', 'B5'])).toStrictEqual(['B4', 'B5']);
    expect(gameboard.placeShip(new Ship(3), ['C4', 'D4', 'E4'])).toStrictEqual(['C4', 'D4', 'E4']);
    expect(gameboard.placeShip(new Ship(4), ['F1', 'F2', 'F3', 'F4'])).toStrictEqual(['F1', 'F2', 'F3', 'F4']);
    expect(gameboard.placeShip(new Ship(5), ['A7', 'B7', 'C7', 'D7', 'E7'])).toStrictEqual(['A7', 'B7', 'C7', 'D7', 'E7']);
  });

  test('receives ship attack', () => {
    gameboard.placeShip(new Ship(1), ['A1']);
    expect(gameboard.receiveAttack('A1')).toBe('H');

    gameboard.placeShip(new Ship(3), ['C4', 'D4', 'E4']);
    expect(gameboard.receiveAttack('C4')).toBe('H');
    expect(gameboard.receiveAttack('D4')).toBe('H');
    expect(gameboard.receiveAttack('E4')).toBe('H');
  });

  test('received attacks increase hits in the ship', () => {
    gameboard.placeShip(new Ship(1), ['A1']);
    gameboard.receiveAttack('A1');
    expect(gameboard.board.get('A1').ship.hits).toBe(1);

    gameboard.placeShip(new Ship(3), ['C4', 'D4', 'E4']);
    gameboard.receiveAttack('C4');
    gameboard.receiveAttack('D4');
    gameboard.receiveAttack('E4');
    expect(gameboard.board.get('C4').ship.hits).toBe(3);
  });

  test('receives miss attack', () => {
    expect(gameboard.receiveAttack('G4')).toBe('M');
    expect(gameboard.receiveAttack('G9')).toBe('M');
    expect(gameboard.receiveAttack('J10')).toBe('M');
  });

  test('misses are stored', () => {
    gameboard.receiveAttack('I1');
    expect(gameboard.board.get('I1').status).toBe('M');
  });

  test('receiveAttack() can handle attack at the same square', () => {
    gameboard.placeShip(new Ship(1), ['A1']);
    gameboard.receiveAttack('A1');
    expect(gameboard.receiveAttack('A1')).toBe('H');
  });

  test('game ends when all ships are sunk', () => {
    gameboard.placeShip(new Ship(1), ['A1']);
    gameboard.placeShip(new Ship(3), ['C4', 'D4', 'E4']);
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('C4');
    gameboard.receiveAttack('D4');
    gameboard.receiveAttack('E4');
    expect(gameboard.endgame).toBe(true);
  });
});
