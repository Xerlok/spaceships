export default class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.active = false;
  }

  isActive() {
    return this.active;
  }
}
