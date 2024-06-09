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
    console.log('I shot at: ' + attackCoords);
    console.log('Attacked square status is now: ' + gameboard.board.get(attackCoords).status);
    console.log('Now target ship is: ' + JSON.stringify(this.targetShip));
    console.log('Now ship was hit: ' + this.wasShipHit);
    console.log('_______');
    return attackCoords;
  }

  sinkShip(board) {
    let squareToAttack;
    const possibleShipCoords = [];
    const coordsToSplice = [];

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
    console.log('Unfiltered possible coords were: ' + possibleShipCoords);
  
    for (let i = 0; i < possibleShipCoords.length; i += 1) {
      if (
        !board.get(possibleShipCoords[i])
        || board.get(possibleShipCoords[i]).status === 'M'
        || board.get(possibleShipCoords[i]).status === 'H'
      ) {
        coordsToSplice.push(possibleShipCoords[i]);
      }
    }

    if (coordsToSplice.length !== 0) {
      coordsToSplice.forEach((coord) => {
        possibleShipCoords.splice(possibleShipCoords.indexOf(coord), 1);
      });
    }
    
    console.log('My possible coords were: ' + possibleShipCoords);

    if (possibleShipCoords.length === 0) {
      squareToAttack = null;
    } else {
      squareToAttack = possibleShipCoords[
        this.generateRandomInt(0, (possibleShipCoords.length - 1))
      ];
    }

    console.log('To sink the ship I chose: ' + squareToAttack);

    return squareToAttack;
  }

  chooseSquare(board) {
    const squaresToAttack = [];
    let squareToAttack;

    console.log('Target ship was: ' + JSON.stringify(this.targetShip));
    console.log('Ship was hit: ' + this.wasShipHit);

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
      if (squareToAttack === null) {
        squareToAttack = squaresToAttack[
          this.generateRandomInt(0, (squaresToAttack.length - 1))
        ];
      }
    }

    if (this.targetShip && this.targetShip.isSunk()) {
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
