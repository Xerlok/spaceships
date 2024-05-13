/*eslint-disable*/
const boardOneSquares = document.querySelectorAll('.board-1-square');
const boardTwoSquares = document.querySelectorAll('.board-2-square');

export default function addEventListeners(gameboard, player) {
  let board;
  if (player === 1) { board = boardOneSquares; }
  else { board = boardTwoSquares; }

  board.forEach((boardSquare) => {
    const squareStatus = gameboard.board.get(boardSquare.getAttribute('data')).status;
    if (squareStatus === 'S') {
      boardSquare.classList.remove('board-2-square-empty');
      boardSquare.classList.add('board-2-square-ship');
    }
  })

  board.forEach((boardSquare) => {
    const squareStatus = gameboard.board.get(boardSquare.getAttribute('data')).status;
    boardSquare.addEventListener('click', () => {
      if (squareStatus === 'S') {
        boardSquare.classList.remove('board-2-square-ship');
        boardSquare.classList.add('board-2-square-hit');
      }
      if (squareStatus === '') {
        boardSquare.classList.remove('board-2-square-empty');
        boardSquare.classList.add('board-2-square-miss');
      }
    })
  })
}