export default class Ship {
  constructor(positions) {
    this.length = positions.length;
    this.positions = positions;
    this.hits = 0;
  }

  get isSunked() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }

  hit() {
    this.hits += 1;
  }
}
