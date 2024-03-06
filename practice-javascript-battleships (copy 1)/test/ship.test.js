import Ship from '../src/Ship';
//Comprobar que las propiedades sean  definidas
//Comprobar que hits inicie en 0
//Comprobar que isSunked() inicie en false
//Comprobar si hit() cumple funcion
//Comprobar isSunked() === true cuando hit()*length veces

describe('Ship tests', () => {
  const ship = new Ship(['A3', 'A4'], true);
  test('Ship properties to be defined and correct initialization', () => {
    const { positions, length } = ship;
    expect(ship).toBeInstanceOf(Ship);
    expect([positions, length]).toBeDefined();
    expect(ship.isSunked).toBe(false);
    expect(ship.hits).toBe(0);
  });
  test('Number of hits increment when hit()', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });
  test('Ship is sunked when hit() * length times', () => {
    let i = 1;
    while (i < ship.length) {
      ship.hit();
      i++;
    }
    console.log('ship.length', ship.length);
    console.log('ship.hits', ship.hits);
    expect(ship.isSunked).toBe(true);
  });
});
