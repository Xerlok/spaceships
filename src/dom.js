/*eslint-disable*/
const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');

export default function addEventListeners(gameboard) {
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
    const squareStatus = gameboard.board.get(boardSquare.getAttribute('data')).status;
    if (squareStatus === 'S') {
      boardSquare.classList.remove(`board-${player}-square-empty`);
      boardSquare.classList.add(`board-${player}-square-ship`);
    }
  })

  board.forEach((boardSquare) => {
    const squareCoords = boardSquare.getAttribute('data');
    const squareStatus = gameboard.board.get(boardSquare.getAttribute('data')).status;
    const thisPlayerTurn = true;

    boardSquare.addEventListener('click', () => {
      if (!gameboard.player.isActive()) {
        if (squareStatus === 'S' && thisPlayerTurn) {
          boardSquare.classList.remove(`board-${player}-square-ship`);
          boardSquare.classList.add(`board-${player}-square-hit`);
          gameboard.receiveAttack(squareCoords);
          gameboard.player.switchPlayer();
        }
        if (squareStatus === '' && thisPlayerTurn) {
          boardSquare.classList.remove(`board-${player}-square-empty`);
          boardSquare.classList.add(`board-${player}-square-miss`);
          gameboard.player.switchPlayer();
        }
      }
    })
  })
}
