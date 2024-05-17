export default class GameState {
  constructor(player1 = null, player2 = null) {
    this.player1 = player1;
    this.player2 = player2;
    this.isGameOver = false;
  }

  switchPlayer() {
    if (this.player1.isActive()) {
      this.player1.active = false;
      this.player2.active = true;
      return 'Player 2 turn';
    }

    this.player1.active = true;
    this.player2.active = false;
    return 'Player 1 turn';
  }

  gameOver() {
    this.player1.active = false;
    this.player2.active = false;
    this.isGameOver = true;
    return this.isGameOver;
  }
}
