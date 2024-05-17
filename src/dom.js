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

    boardSquare.addEventListener('click', () => {
      if (!player.isActive() && !gameState.isGameOver) {
        if (squareStatus === 'S') {
          squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);
          renderBoards(player);
          gameState.switchPlayer();
        }
        if (squareStatus === '') {
          squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);
          renderBoards(player);
          gameState.switchPlayer();
        }
      }
    })
  })
}

function addEventListeners(player, gameState) {
  addBoardListeners(player, gameState);
}

function renderBoards(player) {
  const board = player.gameboard.board;
  let boardSquares;

  if (player.type === 'human1') {
    boardSquares = boardOneSquares;
  } else {
    boardSquares = boardTwoSquares;
  }

  boardSquares.forEach((boardSquare) => {
    const squareStatus = board.get(boardSquare.getAttribute('data')).status;

    boardSquare.classList.remove(`board-1-square-empty`);
    boardSquare.classList.remove(`board-1-square-ship`);
    boardSquare.classList.remove(`board-1-square-hit`);
    boardSquare.classList.remove(`board-1-square-miss`);

    switch (squareStatus) {
      case '':
        boardSquare.classList.add(`board-1-square-empty`);
        break;
      case 'S':
        boardSquare.classList.add(`board-1-square-ship`);
        break;
      case 'H':
        boardSquare.classList.add(`board-1-square-hit`);
        break;
      case 'M':
        boardSquare.classList.add(`board-1-square-miss`);
        break;
      default:
        throw new Error('Something went wrong...');
    }
  });

}

export {
  addEventListeners,
  renderBoards
}