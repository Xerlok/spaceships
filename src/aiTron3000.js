export default class AITron3000 {
  static makeMove(gameboard, coords = null) {
    let attackCoords = coords;

    if (coords === null) {
      attackCoords = AITron3000.chooseSquare(gameboard.board);
    }
    gameboard.receiveAttack(attackCoords);
    return coords;
  }

  static chooseSquare(board) {
    const squaresToAttack = [];
    board.forEach((value, key) => {
      if (value.status !== 'H' && value.status !== 'M') {
        squaresToAttack.push(key);
      }
    });

    const squareToAttack = squaresToAttack[
      AITron3000.generateRandomInt(0, (squaresToAttack.length - 1))
    ];

    return squareToAttack;
  }

  static generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
