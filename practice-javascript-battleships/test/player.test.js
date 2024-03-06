import Player from '../src/Player';

describe('Player tests', () => {
  const playerOne = new Player(
    [
      ['A3'],
      ['D4'],
      ['E5'],
      ['F6'],
      ['B3', 'B4'],
      ['K7', 'J7'],
      ['C3', 'C3'],
      ['G9', 'G8', 'G7'],
      ['A9', 'A8', 'A7'],
      ['C9', 'C8', 'C7', 'C6'],
    ],
    'zubstack'
  );
  const playerTwo = new Player(
    [
      ['G3'],
      ['A4'],
      ['C5'],
      ['E6'],
      ['A2', 'A3'],
      ['K6', 'J6'],
      ['C3', 'C4'],
      ['G9', 'G8', 'G7'],
      ['A9', 'A8', 'A7'],
      ['C9', 'C8', 'C7', 'C6'],
    ],
    'multialejo'
  );

  test('Check player properties', () => {
    const { gameboard, name, atack } = playerOne;
    expect([gameboard, name, atack]).toBeDefined();
  });

  // eslint-disable-next-line quotes
  test("Player atacks enemy's gameboard", () => {
    playerOne.attacks('C5', playerTwo.gameboard);
    expect(playerTwo.gameboard.ships[2].hits).toBe(1);
    expect(playerTwo.gameboard.attackedPositions).toHaveLength(1);
  });
});
