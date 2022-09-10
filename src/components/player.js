import gameBoard from './gameboard';



export default function player() {
  let playerGameBoard = gameBoard();
  playerGameBoard.initBoard();
  let attacks = [];
  return {
    board: playerGameBoard,
    makeAttack: function makeAttack(pos, tempBoard, rand) {
      if (!rand) {
        return tempBoard.recieveAttack(pos);
      }
      else {
        let tempPos = 0;
        while (attacks.includes(tempPos)) {
          tempPos = Math.round((Math.random() * 100));
        }
        attacks.push(tempPos)
        tempBoard.recieveAttack(tempPos);
        return tempPos;
      }
    }
  }
}
