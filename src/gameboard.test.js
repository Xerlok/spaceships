/*eslint-disable*/
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
  })

  test('gameboard places a ship of specified length', () => {
    expect(gameboard.placeShip(new Ship(1), 'A1')).toStrictEqual(['A1']);
    expect(gameboard.placeShip(new Ship(2))).toStrictEqual(['B4', 'B5']);
    expect(gameboard.placeShip(new Ship(3))).toStrictEqual(['C4', 'D4', 'E4']);
    expect(gameboard.placeShip(new Ship(4))).toStrictEqual(['F1', 'F2', 'F3', 'F4']);
    expect(gameboard.placeShip(new Ship(5))).toStrictEqual(['A7', 'B7', 'C7', 'D7', 'E7']);
  });

  test('gameboard recevies attack', () => {
    gameboard.placeShip(new Ship(1), 'A1')
    expect(gameboard.receiveAttack('A1')).toBe('A1 attacked');
  })
});
