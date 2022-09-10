import player from './components/player'

let boardOne = document.querySelector('.board1');
let boardTwo = document.querySelector('.board2');

function boardGrid(board) {
  for (let i = 0; i < 100; i++) {
    let tile = document.createElement('div');
    tile.classList.add('tile')
    tile.dataset.num = (i)
    board.append(tile)
  }
}

function previewPlacement(tiles, board, length, rot) {
  let extraLength = 0;
  document.querySelector('.rotate').addEventListener('click', () => {
    if (!rot)
      rot = true
    else
      rot = false
  })
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      if (extraLength)
        length = 0;
      length = length - 1
      if (length == 1) {
        extraLength = 2;
        length = length + extraLength;
      }
    })
    tile.addEventListener('mouseover', () => {
      if (!rot && parseInt(tile.dataset.num) % 10 + length < 11) {
        for (let i = parseInt(tile.dataset.num); i < parseInt(tile.dataset.num) + length; i++) {
          board.querySelector(`[data-num='${i}']`).classList.add('hover')
        }
      }
      else if (rot && parseInt(tile.dataset.num) + length * 10 <= 109) {
        for (let i = parseInt(tile.dataset.num); i < (parseInt(tile.dataset.num) + length * 10); i += 10) {
          board.querySelector(`[data-num='${i}']`).classList.add('hover')
        }
      }
    })

    // removal off preview
    tile.addEventListener('mouseout', () => {
      if (!rot && parseInt(tile.dataset.num) % 10 + length < 11) {
        for (let i = parseInt(tile.dataset.num); i < parseInt(tile.dataset.num) + length; i++) {
          board.querySelector(`[data-num='${i}']`).classList.remove('hover')
        }
      }
      else if (rot && parseInt(tile.dataset.num) + length * 10 <= 109) {
        for (let i = parseInt(tile.dataset.num); i < parseInt(tile.dataset.num) + length * 10; i += 10) {
          board.querySelector(`[data-num='${i}']`).classList.remove('hover')
        }
      }
    })
  });
}

function shipPlacement(tiles, board, length, gameBoard) {
  let rot = false;
  let last = 0;
  document.querySelector('.rotate').addEventListener('click', () => {
    if (!rot)
      rot = true
    else
      rot = false
  })
  previewPlacement(tiles, board, length, rot)
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      gameBoard.placeShip(length + last, parseInt(tile.dataset.num), rot)
      console.log(gameBoard.tiles)
      board.querySelectorAll('.hover').forEach(tile => { tile.classList.add('picked') })
      length = length - 1
      if (length == 1)
        last = 2;
      if (length == 0) {
        document.querySelector('.rotate').innerHTML = 'START GAME';
        document.querySelector('.rotate').addEventListener('click', game)
        document.querySelector('.info').innerHTML = 'Ready?'
      }
    })
  })
}

let playerOne = player()
boardGrid(boardOne)
let tiles = boardOne.querySelectorAll('.tile');
shipPlacement(tiles, boardOne, 5, playerOne.board)
boardGrid(boardTwo)
let playerTwo = player();
playerTwo.board.randomize();

function game() {
  document.querySelector('.info').innerHTML = 'attack the opponents board'
  let aiTiles = boardTwo.querySelectorAll('.tile');
  aiTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      if (playerOne.makeAttack(parseInt(tile.dataset.num), playerTwo.board, false))
        tile.classList.add('hit')
      else
        tile.classList.add('water')
      boardOne.querySelector(`[data-num='${playerTwo.makeAttack(1, playerOne.board, true)}`).classList.add('self-hit')
      if (playerOne.board.checkLoss()) {
        document.querySelector('.info').innerHTML = 'AI Wins!';
      }
      if (playerTwo.board.checkLoss()) {
        document.querySelector('.info').innerHTML = 'Player Wins!';
      }
    })
  })
}