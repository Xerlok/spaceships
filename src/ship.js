export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    if (this.isSunk()) { return 'dead'; }
    return 'hit!';
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}
