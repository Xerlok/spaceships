import './styles.css';
import { addEventListeners, renderBoards } from './dom';
import Gameboard from './gameboard';
import Player from './player';
import GameState from './gameState';
import addStars from './starfield';

addStars();
const gameState = new GameState('ai');
const player1 = new Player('Zerus', 'human1', new Gameboard(gameState));
const player2 = new Player('AItron3000', 'ai', new Gameboard(gameState));
gameState.player1 = player1;
gameState.player2 = player2;

player1.gameboard.buildBoard();
addEventListeners(player1, gameState);
player2.gameboard.buildBoard();
addEventListeners(player2, gameState);
player1.active = true;

/*player1.gameboard.placeShip(1, ['H7']);
player1.gameboard.placeShip(2, ['J3', 'J4']);
player1.gameboard.placeShip(3, ['E3', 'F3', 'G3']);
player1.gameboard.placeShip(4, ['J7', 'J8', 'J9', 'J10']);
player1.gameboard.placeShip(5, ['B5', 'B6', 'B7', 'B8', 'B9']);

player2.gameboard.placeShip(1, ['A1']);
player2.gameboard.placeShip(2, ['B4', 'B5']);
player2.gameboard.placeShip(3, ['G5', 'G6', 'G7']);
player2.gameboard.placeShip(4, ['J1', 'J2', 'J3', 'J4']);
player2.gameboard.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7']);*/

renderBoards(gameState);
