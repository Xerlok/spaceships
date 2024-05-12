export default class Gameboard {
  constructor() {
    this.board = new Map();
    this.ships = [];
    this.endgame = false;
  }

  buildBoard() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    letters.forEach((letter) => {
      for (let i = 1; i <= 10; i += 1) {
        const key = `${letter}${i}`;
        this.board.set(key, { status: '', ship: null });
      }
    });
    return true;
  }

  placeShip(newShip, coords) {
    if (this.board.size === 0) {
      throw new Error('Board is not build!');
    }

    const newShipCoordinates = [];

    for (let i = 0; i < coords.length; i += 1) {
      this.board.set(coords[i], { status: 'S', ship: newShip });
      this.ships.push(newShip);
      newShipCoordinates.push(coords[i]);
    }

    return newShipCoordinates;
  }

  receiveAttack(coords) {
    const attackedSquare = this.board.get(coords);

    if (attackedSquare.status === '') {
      attackedSquare.status = 'M';
      return attackedSquare.status;
    }
    if (attackedSquare.status === 'S') {
      attackedSquare.status = 'H';
      attackedSquare.ship.hit();
      this.isEndgame();
      return attackedSquare.status;
    }

    return attackedSquare.status;
  }

  isEndgame() {
    const shipsSunk = [];

    this.ships.forEach((ship) => {
      if (ship.isSunk) {
        shipsSunk.push(true);
      }
    });

    if (shipsSunk.length === this.ships.length) {
      this.endgame = true;
    }
  }
}
