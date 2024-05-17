/*eslint-disable*/
import AITron3000 from './aiTron3000';
import Player from './player';
import Gameboard from './gameboard';
import GameState from './gameState';

describe('AI', () => {
  let gameState;
  let humanPlayer;
  let aiPlayer;
  let ai;

  beforeEach(() => {
    gameState = new GameState();
    humanPlayer = new Player('Kek', 'human1', new Gameboard(gameState));
    aiPlayer = new Player('Shrek', 'ai', new Gameboard(gameState));
    gameState.player1 = humanPlayer;
    gameState.player2 = aiPlayer;
    humanPlayer.gameboard.buildBoard();
    aiPlayer.gameboard.buildBoard();
    ai = new AITron3000();
    aiPlayer.ai = ai;
  });

  test('aiTron attaches to player and gameboard', () => {
    expect(aiPlayer.ai).toBe(ai);
  });

  test('aiTron returns a random coordinate to hit', () => {
    expect(AITron3000.chooseSquare()).toMatch(/[A-J][1-9]/);
  });

  test('aiTron changes state of the square', () => {
    const previousState = humanPlayer.gameboard.board.get('A1');
    AITron3000.makeMove(humanPlayer.gameboard, 'A1');
    expect(humanPlayer.gameboard.board.get('A1').status).not.toBe(previousState);
  });
})


