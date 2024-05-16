import './styles.css';
import addStars from './starfield';
import addEventListeners from './dom';
import Gameboard from './gameboard';
import Player from './player';
import GameState from './gameState';

addStars();
const gameState = new GameState('human1');

const boardOne = new Gameboard(new Player('Zerus', 'human1', gameState));
boardOne.buildBoard();
boardOne.placeShip(1, ['H7']);
boardOne.placeShip(2, ['J3', 'J4']);
boardOne.placeShip(3, ['E3', 'F3', 'G3']);
boardOne.placeShip(4, ['J7', 'J8', 'J9', 'J10']);
boardOne.placeShip(5, ['B5', 'B6', 'B7', 'B8', 'B9']);
addEventListeners(boardOne);
boardOne.player.active = true;
gameState.currentPlayer = boardOne.player.type;

const boardTwo = new Gameboard(new Player('AItron3000', 'ai'));
boardTwo.buildBoard();
boardTwo.placeShip(1, ['A1']);
boardTwo.placeShip(2, ['B4', 'B5']);
boardTwo.placeShip(3, ['G5', 'G6', 'G7']);
boardTwo.placeShip(4, ['J1', 'J2', 'J3', 'J4']);
boardTwo.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7']);
addEventListeners(boardTwo);
