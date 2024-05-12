import Ship from './ship';

describe('Ship', () => {
  let ship;
  const shipLengths = [1, 2, 3, 4, 5];

  test.each(shipLengths)('creates a ship with specified length (%i)', (length) => {
    ship = new Ship(length);
    expect(ship.length).toBe(length);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test('hit() increases hits', () => {
    ship = new Ship(5);
    expect(ship.hit()).toBe('hit!');
  });

  test.each(shipLengths)('hit() sinks ship after length hits (%i)', (length) => {
    ship = new Ship(length);
    let currentValue;
    for (let i = 0; i < length; i += 1) {
      currentValue = ship.hit();
    }
    expect(currentValue).toBe('dead');
  });
});
