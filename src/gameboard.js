/*eslint-disable*/
export default class Gameboard {
  constructor() {
    this.board = new Map();
  }

  buildBoard() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    letters.forEach((letter) => {
      for (let i = 1; i <= 10; i += 1) {
        const key = `${letter}${i}`;
        this.board[key] = '';
      }
    });
    return true;
  }

  placeShip(newShip, coords) {
    if (Object.keys(this.board).length === 0) {
      throw new Error('Board is not build!');
    }

    let newShipCoordinates = [];
  
    switch (newShip.length) {
      case 1:
        this.board.set([coords], { status: 'S', ship: newShip });
        newShipCoordinates = [coords];
        break;
      case 2:
        this.board.B4 = 'S';
        this.board.B5 = 'S';
        newShipCoordinates = ['B4', 'B5'];
        break;
      case 3:
        this.board.C4 = 'S';
        this.board.D4 = 'S';
        this.board.E4 = 'S';
        newShipCoordinates = ['C4', 'D4', 'E4'];
        break;
      case 4:
        this.board.F1 = 'S';
        this.board.F2 = 'S';
        this.board.F3 = 'S';
        this.board.F4 = 'S';
        newShipCoordinates = ['F1', 'F2', 'F3', 'F4'];
        break;
      case 5:
        this.board.A7 = 'S';
        this.board.B7 = 'S';
        this.board.C7 = 'S';
        this.board.D7 = 'S';
        this.board.E7 = 'S';
        newShipCoordinates = ['A7', 'B7', 'C7', 'D7', 'E7'];
        break;
      default:
        throw new Error('wrong length!');
    }
    return newShipCoordinates;
  }

  receiveAttack(coords) {
    const attackedSquare = this.board.get(coords);
    return attackedSquare;
  }
}