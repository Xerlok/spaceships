/*eslint-disable*/
export default class AITron3000 {
  constructor() {

  }

  makeMove(gameboard, coords = null) {
    const board = gameboard.board;

    if (coords === null) {
      coords = this.chooseSquare;
    }

    if (board.get(coords).status === '') {
      board.get(coords).status = 'M';
    } else if (board.get(coords).status === 'S') {
      board.get(coords).status = 'H';
    }
    return board.get(coords).status;
  }
  
chooseSquare() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const squareToAttack = letters[this.generateRandomInt(0, (letters.length - 1))] + 
  numbers[this.generateRandomInt(0, (numbers.length - 1))];

  return squareToAttack;
}

  generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
