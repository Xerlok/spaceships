export default class Player {
  constructor(name, type, gameboard) {
    this.name = name;
    this.type = type;
    this.gameboard = gameboard;
    this.active = false;
  }

  isActive() {
    return this.active;
  }
}
