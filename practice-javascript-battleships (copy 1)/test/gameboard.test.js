import Gameboard from '../src/Gameboard';

describe('Gameboard tests', () => {
  const gameboard = new Gameboard([
    ['A3'],
    ['D4'],
    ['E5'],
    ['F6'],
    ['B3', 'B4'],
    ['K7', 'J7'],
    ['C3', 'C4'],
    ['G9', 'G8', 'G7'],
    ['A9', 'A8', 'A7'],
    ['C9', 'C8', 'C7', 'C6'],
  ]);
  test('Gameboard has the correct properties', () => {
    const { attackedPositions, shipPositions } = gameboard;
    // //Eliminar:
    // const attackedShip = gameboard.receiveAttack('B30');
    // console.log('attackedShip', attackedShip);

    expect([attackedPositions, shipPositions]).toBeDefined();
  });

  test('Gameboard register all ship positions', () => {
    console.log('gameboard.ships', gameboard.ships);
    expect(gameboard.shipPositions).toHaveLength(20);
  });

  test('Gameboard register new attack properly', () => {
    const shipHit = gameboard.ships[4];
    gameboard.receiveAttack('B3');
    expect(gameboard.attackedPositions).toHaveLength(1);
    expect(shipHit.hits).toBe(1);
  });
  test('Gameboard register missed shot properly', () => {
    gameboard.receiveAttack('B4');
    expect(gameboard.attackedPositions).toHaveLength(2);
  });
  test('Gameboard report when all their ships is sunked', () => {
    expect(gameboard.hasShips).toBe(true);
  });
});
