
import ship from './components/ship';
import gameBoard from './components/gameboard';

let ship1 = ship(1);
ship1.hit();
test('Sinking ship', ()  => {
expect(ship1.isSunk()).toBe(true)});

let gb = gameBoard();
gb.initBoard();

test('Gameboard init func', ()  => {
  expect(gb.tiles[99]).toBe(null)});

gb.placeShip(3, 1, false)

test('Gameboard place ship func', () => {
  console.log(gb.tiles[2])
  expect(gb.tiles[2]).toMatchObject({})
})

test('Gameboard place ship func 2', () => {
  expect(gb.tiles[0]).toBe(null)
})

let gb2 = gameBoard()
gb2.initBoard()
gb2.placeShip(5, 1, true)

test('Gameboard place ship func 3', () => {

  expect(gb2.tiles[11]).toMatchObject({})
})

test('Gameboard place ship func 4', () => {
  expect(gb2.tiles[2]).toBe(null)
})

test('Gameboard check loss', () => {
  expect(gb2.checkLoss()).toBe(false)
})

let gb3 = gameBoard()
gb3.initBoard()
gb3.placeShip(1, 1, false)

test('Gameboard attack return', () => {
  expect(gb3.recieveAttack(2)).toBe(false)
})

gb3.recieveAttack(1)

test('Gameboard check loss', () => {
  expect(gb3.checkLoss()).toBe(true)
})
