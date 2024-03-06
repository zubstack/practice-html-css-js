import Gameboard from './Gameboard';

export default class Player {
  constructor(positionsArr, name) {
    this.gameboard = this.createGameboard(positionsArr);
    this.name = name;
  }

  createGameboard(positionsArr) {
    return new Gameboard(positionsArr);
  }

  attacks(coordenade, gameboard) {
    gameboard.receiveAttack(coordenade);
    return;
  }
}
