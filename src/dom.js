/*eslint-disable*/
const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');

export default function addEventListeners(gameboard, gameState) {
  let board;
  let player;
  if (gameboard.player.type === 'human1') { 
    board = boardOneSquares; 
    player = 1;
  }
  else {
    board = boardTwoSquares;
    player = 2;
  }

  board.forEach((boardSquare) => {
    let squareStatus = gameboard.board.get(boardSquare.getAttribute('data')).status;
    const squareCoords = boardSquare.getAttribute('data');

    if (squareStatus === 'S') {
      boardSquare.classList.remove(`board-${player}-square-empty`);
      boardSquare.classList.add(`board-${player}-square-ship`);
    }

    boardSquare.addEventListener('click', () => {
      if (!gameboard.player.isActive() && !gameState.isGameOver) {
        if (squareStatus === 'S') {
          boardSquare.classList.remove(`board-${player}-square-ship`);
          boardSquare.classList.add(`board-${player}-square-hit`);
          squareStatus = gameboard.receiveAttack(squareCoords);
          gameState.switchPlayer();
        }
        if (squareStatus === '') {
          boardSquare.classList.remove(`board-${player}-square-empty`);
          boardSquare.classList.add(`board-${player}-square-miss`);
          squareStatus = gameboard.receiveAttack(squareCoords);
          gameState.switchPlayer();
        }
      }
    })
  })
}
