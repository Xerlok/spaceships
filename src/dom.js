/*eslint-disable*/
const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');

function addBoardListeners(player, gameState) {
  let board;
  let playerSquare;
  if (player.type === 'human1') { 
    board = boardOneSquares; 
    playerSquare = 1;
  }
  else {
    board = boardTwoSquares;
    playerSquare = 2;
  }

  board.forEach((boardSquare) => {
    let squareStatus = player.gameboard.board.get(boardSquare.getAttribute('data')).status;
    const squareCoords = boardSquare.getAttribute('data');

    if (squareStatus === 'S') {
      boardSquare.classList.remove(`board-${playerSquare}-square-empty`);
      boardSquare.classList.add(`board-${playerSquare}-square-ship`);
    }

    boardSquare.addEventListener('click', () => {
      if (!player.isActive() && !gameState.isGameOver) {
        if (squareStatus === 'S') {
          boardSquare.classList.remove(`board-${playerSquare}-square-ship`);
          boardSquare.classList.add(`board-${playerSquare}-square-hit`);
          squareStatus = player.gameboard.receiveAttack(squareCoords);
          gameState.switchPlayer();
        }
        if (squareStatus === '') {
          boardSquare.classList.remove(`board-${playerSquare}-square-empty`);
          boardSquare.classList.add(`board-${playerSquare}-square-miss`);
          squareStatus = player.gameboard.receiveAttack(squareCoords);
          gameState.switchPlayer();
        }
      }
    })
  })
}

export default function addEventListeners(player, gameState) {
  addBoardListeners(player, gameState);
}
