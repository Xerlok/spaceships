/* eslint-disable */
import addStars from './starfield';

const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');
const mainMenu = document.querySelector('.main-menu');
const mainContainer = document.querySelector('.main-container');
const snglPlayerBtn = document.querySelector('.sngl-player');
const shipAxisBtn = document.querySelector('.ship-axis');
const ships = document.querySelectorAll('.ship-container');

let dragStartShipLength = null;
let placementAxis = 'x';

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

function addBoardListeners(players, gameState) {
  let board;

  players.forEach((player) => {
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
  })
}

function dropShip(gameState, coords) {
  const newShipCoords = [];
  let adjacentSquare;
  newShipCoords.push(coords);

  if (placementAxis === 'x') {
    if (dragStartShipLength > 1) {
      for (let i = 1; i < dragStartShipLength; i += 1) {
        adjacentSquare = `${coords.charAt(0)}${parseInt(coords.charAt(1) + coords.charAt(2)) + i}`;
        newShipCoords.push(adjacentSquare);
      }
    }
  } else if (placementAxis = 'y') {
    for (let i = 1; i < dragStartShipLength; i += 1) {
      adjacentSquare = `${String.fromCharCode(coords.charCodeAt(0) + i)}${coords.charAt(1) + coords.charAt(2)}`;
      newShipCoords.push(adjacentSquare);
    }
  }
  
  const result = gameState.player1.gameboard.placeShip(dragStartShipLength, newShipCoords);
  renderBoards(gameState);
  return result;
}

function addShipsPlacementListeners(gameState) {
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', (e) => {
      dragStartShipLength = e.target.getAttribute('data-length');
    });
  });

  boardOneSquares.forEach((boardOneSquare) => {
    boardOneSquare.addEventListener('dragenter', (e) => {
      if (e.target.classList.contains('board-1-square')) {
        e.target.classList.add('over');
      }
    });

    boardOneSquare.addEventListener('dragleave', (e) => {
      if (e.target.classList.contains('board-1-square')) {
        e.target.classList.remove('over');
      }
    });

    boardOneSquare.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    boardOneSquare.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('board-1-square')) {
        e.target.classList.remove('over');
        const coords = e.target.getAttribute('data');
        const dropResult = dropShip(gameState, coords);
        if (dropResult === null) {
          alert('Wrong placement!');
        }
      }
    });
  });
}

function addButtonsListeners() {
  snglPlayerBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainContainer.style.display = 'block';
    addStars();
  });

  shipAxisBtn.addEventListener('click', () => {
    placementAxis = (placementAxis === 'x') ? 'y' : 'x';
    shipAxisBtn.innerText = (placementAxis === 'x') ? 'Placement: Horizontal' : 'Placement: Vertical';
  });
}

function addEventListeners(players, gameState) {
  addBoardListeners(players, gameState);
  addShipsPlacementListeners(gameState);
  addButtonsListeners();
}

export {
  addEventListeners,
  renderBoards,
};
