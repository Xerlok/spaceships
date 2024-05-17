export default class AITron3000 {
  static makeMove(gameboard, coords = null) {
    let attackCoords = coords;

    if (coords === null) {
      attackCoords = AITron3000.chooseSquare();
    }
    if (gameboard.board.get(attackCoords).status === 'M'
    || gameboard.board.get(attackCoords).status === 'H') {
      AITron3000.makeMove(gameboard, attackCoords);
      return coords;
    }
    gameboard.receiveAttack(attackCoords);
    return coords;
  }

  static chooseSquare() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const squareToAttack = letters[AITron3000.generateRandomInt(0, (letters.length - 1))]
    + numbers[AITron3000.generateRandomInt(0, (numbers.length - 1))];

    return squareToAttack;
  }

  static generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
