export default class GameState {
  constructor(gameType = 'ai', player1 = null, player2 = null) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameType = gameType;
    this.isGameOver = true;
    this.isGameStart = false;
  }

  switchPlayer() {
    if (this.gameType === 'ai' && !this.isGameOver) {
      this.player2.ai.makeMove(this.player1.gameboard);
    } else {
      if (this.player1.isActive()) {
        this.player1.active = false;
        this.player2.active = true;
        return 'Player 2 turn';
      }

      this.player1.active = true;
      this.player2.active = false;
      return 'Player 1 turn';
    }
    return 'Player 1 turn';
  }

  gameOver() {
    this.player1.active = false;
    this.player2.active = false;
    this.isGameOver = true;
    return this.isGameOver;
  }
}
