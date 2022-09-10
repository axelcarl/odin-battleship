import ship from './ship'

export default function gameBoard() {
  let ships = [];
  let returnObj = {
    tiles: [],
    initBoard: function initBoard() {
      returnObj.tiles = [];
      for (let i = 0; i < 100; i++) {
        returnObj.tiles.push(null)
      }
    },
    placeShip: function placeShip(length, pos, rot) {
      let currentShip = ship(length);
      ships.push(currentShip);
      if (rot == false) {
        for (let i = pos; i < pos + length; i++) {
          returnObj.tiles[i] = currentShip;
        }
      }
      else {
        for (let i = pos; i < pos + length * 10; i += 10) {
          returnObj.tiles[i] = currentShip;
        }
      }
    },
    recieveAttack: function recieveAttack(pos) {
      let tile = returnObj.tiles[pos];
      if (tile != null) {
        tile.hit();
        return true;
      }
      else
        return false;
    },
    checkLoss: function checkLoss() {
      let count = 0;
      ships.forEach(ship => {
        if (ship.isSunk())
          count++;
      })
      if (ships.length == count)
        return true;
      else
        return false;
    },
    randomize: function randomize() {
      returnObj.initBoard();
      let positions = [5];
      let ships = [5, 4, 3, 3, 2]
      for (let i = 0; i < 5; i++) {
        let current = 5;
        while (positions.includes(current)) {
          current = Math.floor(Math.random() * 5);
        }
        positions.push(current)
        returnObj.placeShip(ships.shift(), current * 20 + Math.floor(Math.random() * 5), false);
      }
    }
  }
  return returnObj;
}
