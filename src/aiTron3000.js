/* eslint-disable class-methods-use-this */
/* eslint-disable */
export default class AITron3000 {
  constructor() {
    this.targetShip = null;
    this.previousSquare = null;
    this.wasShipHit = false;
  }

  makeMove(gameboard, coords = null) {
    let attackCoords = coords;

    if (attackCoords === null) {
      attackCoords = this.chooseSquare(gameboard.board);
    }
    gameboard.receiveAttack(attackCoords);
    return attackCoords;
  }

  sinkShip(board) {
    let squareToAttack;
    const possibleShipCoords = [];

    possibleShipCoords.push(
      `${this.previousSquare.charAt(0)}${parseInt(this.previousSquare.charAt(1) + this.previousSquare.charAt(2), 10) + 1}`,
    );
    possibleShipCoords.push(
      `${this.previousSquare.charAt(0)}${parseInt(this.previousSquare.charAt(1) + this.previousSquare.charAt(2), 10) - 1}`,
    );
    possibleShipCoords.push(
      `${String.fromCharCode(this.previousSquare.charCodeAt(0) + 1)}${this.previousSquare.charAt(1) + this.previousSquare.charAt(2)}`,
    );
    possibleShipCoords.push(
      `${String.fromCharCode(this.previousSquare.charCodeAt(0) - 1)}${this.previousSquare.charAt(1) + this.previousSquare.charAt(2)}`,
    );

    for (let i = 0; i < possibleShipCoords.length; i += 1) {
      if (
        !board.get(possibleShipCoords[i])
        || board.get(possibleShipCoords[i]).status === 'M'
        || board.get(possibleShipCoords[i]).status === 'H'
      ) {
        possibleShipCoords.splice(i, 1);
      }
    }

    squareToAttack = possibleShipCoords[
      this.generateRandomInt(0, (possibleShipCoords.length - 1))
    ];

    return squareToAttack;
  }

  chooseSquare(board) {
    const squaresToAttack = [];
    let squareToAttack;

    board.forEach((value, key) => {
      if (value.status !== 'H' && value.status !== 'M') {
        squaresToAttack.push(key);
      }
    });

    if (!this.wasShipHit) {
      squareToAttack = squaresToAttack[
        this.generateRandomInt(0, (squaresToAttack.length - 1))
      ];
    } else {
      squareToAttack = this.sinkShip(board);
    }

    if (this.wasShipHit && this.targetShip.isSunk) {
      this.previousSquare = null;
      this.targetShip = null;
      this.wasShipHit = false;
    }

    if (board.get(squareToAttack).status === 'S') {
      this.previousSquare = squareToAttack;
      this.targetShip = board.get(squareToAttack).ship;
      this.wasShipHit = true;
    }
    return squareToAttack;
  }

  generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
