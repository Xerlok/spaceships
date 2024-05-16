import './styles.css';
import addStars from './starfield';
import { addEventListeners, renderBoards } from './dom';
import Gameboard from './gameboard';
import Player from './player';
import GameState from './gameState';

addStars();
const boardOne = new Gameboard();
const boardTwo = new Gameboard();
const player1 = new Player('Zerus', 'human1', boardOne);
const player2 = new Player('AItron3000', 'ai', boardTwo);
const gameState = new GameState(player1, player2);
player1.gameboard.gameState = gameState;
player2.gameboard.gameState = gameState;

boardOne.buildBoard();
boardOne.placeShip(1, ['H7']);
boardOne.placeShip(2, ['J3', 'J4']);
boardOne.placeShip(3, ['E3', 'F3', 'G3']);
boardOne.placeShip(4, ['J7', 'J8', 'J9', 'J10']);
boardOne.placeShip(5, ['B5', 'B6', 'B7', 'B8', 'B9']);
addEventListeners(player1, gameState);
player1.active = true;
gameState.currentPlayer = player1.type;

boardTwo.buildBoard();
boardTwo.placeShip(1, ['A1']);
boardTwo.placeShip(2, ['B4', 'B5']);
boardTwo.placeShip(3, ['G5', 'G6', 'G7']);
boardTwo.placeShip(4, ['J1', 'J2', 'J3', 'J4']);
boardTwo.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7']);
addEventListeners(player2, gameState);
