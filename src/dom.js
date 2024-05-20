import addStars from "./starfield";

const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');
const mainMenu = document.querySelector('.main-menu');
const mainContainer = document.querySelector('.main-container');
const snglPlayerBtn = document.querySelector('.sngl-player');

function renderBoards(gameState) {
  const players = [];
  players.push(gameState.player1);
  players.push(gameState.player2);

  players.forEach((player) => {
    const { board } = player.gameboard;
    let boardSquares;
    let boardNumber;
    if (player.type === 'human1') {
      boardSquares = boardOneSquares;
      boardNumber = '1';
    } else {
      boardSquares = boardTwoSquares;
      boardNumber = '2';
    }

    boardSquares.forEach((boardSquare) => {
      const squareStatus = board.get(boardSquare.getAttribute('data')).status;

      boardSquare.classList.remove(`board-${boardNumber}-square-empty`);
      boardSquare.classList.remove(`board-${boardNumber}-square-ship`);
      boardSquare.classList.remove(`board-${boardNumber}-square-hit`);
      boardSquare.classList.remove(`board-${boardNumber}-square-miss`);

      switch (squareStatus) {
        case '':
          boardSquare.classList.add(`board-${boardNumber}-square-empty`);
          break;
        case 'S':
          boardSquare.classList.add(`board-${boardNumber}-square-ship`);
          break;
        case 'H':
          boardSquare.classList.add(`board-${boardNumber}-square-hit`);
          break;
        case 'M':
          boardSquare.classList.add(`board-${boardNumber}-square-miss`);
          break;
        default:
          throw new Error('Something went wrong...');
      }
    });
  });
}

function addBoardListeners(player, gameState) {
  let board;
  if (player.type === 'human1') {
    board = boardOneSquares;
  } else {
    board = boardTwoSquares;
  }

  board.forEach((boardSquare) => {
    let squareStatus = player.gameboard.board.get(boardSquare.getAttribute('data')).status;
    const squareCoords = boardSquare.getAttribute('data');

    boardSquare.addEventListener('click', () => {
      if (!player.isActive() && !gameState.isGameOver) {
        if (squareStatus === 'S') {
          squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);
          gameState.switchPlayer();
          renderBoards(gameState);
        }
        if (squareStatus === '') {
          squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);
          gameState.switchPlayer();
          renderBoards(gameState);
        }
      }
    });
  });
}

function addEventListeners(player, gameState) {
  addBoardListeners(player, gameState);
  snglPlayerBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainContainer.style.display = 'block';
    addStars();
  });
}

export {
  addEventListeners,
  renderBoards,
};
