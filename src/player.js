export default class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.active = false;
  }

  isActive() {
    return this.active;
  }

  switchPlayer() {
    if (this.active) {
      this.active = false;
    } else if (!this.active) {
      this.active = true;
    }
    return this.active;
  }
}
