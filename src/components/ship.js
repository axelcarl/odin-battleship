function ship(length) {
  let health = length;
  return {
    hit: function hit() {
      health = health - 1;
    },
    isSunk: function isSunk() {
      if (health < 1)
        return true
      else
        return false;
    }
  }
}

module.exports = ship;