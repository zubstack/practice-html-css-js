import Ship from './Ship';

export default class Gameboard {
  constructor(shipsArr) {
    this.ships = this.createShips(shipsArr);
    this.shipPositions = this.getAllPositions();
    this.attackedPositions = [];
  }

  createShips(shipsArr) {
    const allShips = [];

    shipsArr.forEach((ship) => {
      allShips.push(new Ship([...ship]));
    });

    return allShips;
  }

  getAllPositions() {
    const allPositions = [];

    this.ships.forEach((ship) => {
      allPositions.push(...ship.positions);
    });
    return allPositions;
  }

  receiveAttack(coordenade) {
    const attackedShip = this.ships.find((ship) => {
      return ship.positions.includes(coordenade);
    });

    if (attackedShip) {
      attackedShip.hit();
    }
    this.attackedPositions.push(coordenade);
    return;
  }

  get hasShips() {
    return !this.ships.every((ship) => ship.isSunked === true);
  }
}
