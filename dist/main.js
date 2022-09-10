/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/components/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);

function gameBoard() {
  var ships = [];
  var returnObj = {
    tiles: [],
    initBoard: function initBoard() {
      returnObj.tiles = [];

      for (var i = 0; i < 100; i++) {
        returnObj.tiles.push(null);
      }
    },
    placeShip: function placeShip(length, pos, rot) {
      var currentShip = _ship__WEBPACK_IMPORTED_MODULE_0___default()(length);
      ships.push(currentShip);

      if (rot == false) {
        for (var i = pos; i < pos + length; i++) {
          returnObj.tiles[i] = currentShip;
        }
      } else {
        for (var _i = pos; _i < pos + length * 10; _i += 10) {
          returnObj.tiles[_i] = currentShip;
        }
      }
    },
    recieveAttack: function recieveAttack(pos) {
      var tile = returnObj.tiles[pos];

      if (tile != null) {
        tile.hit();
        return true;
      } else return false;
    },
    checkLoss: function checkLoss() {
      var count = 0;
      ships.forEach(function (ship) {
        if (ship.isSunk()) count++;
      });
      if (ships.length == count) return true;else return false;
    },
    randomize: function randomize() {
      returnObj.initBoard();
      var positions = [5];
      var ships = [5, 4, 3, 3, 2];

      for (var i = 0; i < 5; i++) {
        var current = 5;

        while (positions.includes(current)) {
          current = Math.floor(Math.random() * 5);
        }

        positions.push(current);
        returnObj.placeShip(ships.shift(), current * 20 + Math.floor(Math.random() * 5), false);
      }
    }
  };
  return returnObj;
}

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/components/gameboard.js");

function player() {
  var playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  playerGameBoard.initBoard();
  var attacks = [];
  return {
    board: playerGameBoard,
    makeAttack: function makeAttack(pos, tempBoard, rand) {
      if (!rand) {
        return tempBoard.recieveAttack(pos);
      } else {
        var tempPos = 0;

        while (attacks.includes(tempPos)) {
          tempPos = Math.round(Math.random() * 100);
        }

        attacks.push(tempPos);
        tempBoard.recieveAttack(tempPos);
        return tempPos;
      }
    }
  };
}

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((module) => {

function ship(length) {
  var health = length;
  return {
    hit: function hit() {
      health = health - 1;
    },
    isSunk: function isSunk() {
      if (health < 1) return true;else return false;
    }
  };
}

module.exports = ship;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/player */ "./src/components/player.js");

var boardOne = document.querySelector('.board1');
var boardTwo = document.querySelector('.board2');

function boardGrid(board) {
  for (var i = 0; i < 100; i++) {
    var tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.num = i;
    board.append(tile);
  }
}

function previewPlacement(tiles, board, length, rot) {
  var extraLength = 0;
  document.querySelector('.rotate').addEventListener('click', function () {
    if (!rot) rot = true;else rot = false;
  });
  tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
      if (extraLength) length = 0;
      length = length - 1;

      if (length == 1) {
        extraLength = 2;
        length = length + extraLength;
      }
    });
    tile.addEventListener('mouseover', function () {
      if (!rot && parseInt(tile.dataset.num) % 10 + length < 11) {
        for (var i = parseInt(tile.dataset.num); i < parseInt(tile.dataset.num) + length; i++) {
          board.querySelector("[data-num='".concat(i, "']")).classList.add('hover');
        }
      } else if (rot && parseInt(tile.dataset.num) + length * 10 <= 109) {
        for (var _i = parseInt(tile.dataset.num); _i < parseInt(tile.dataset.num) + length * 10; _i += 10) {
          board.querySelector("[data-num='".concat(_i, "']")).classList.add('hover');
        }
      }
    }); // removal off preview

    tile.addEventListener('mouseout', function () {
      if (!rot && parseInt(tile.dataset.num) % 10 + length < 11) {
        for (var i = parseInt(tile.dataset.num); i < parseInt(tile.dataset.num) + length; i++) {
          board.querySelector("[data-num='".concat(i, "']")).classList.remove('hover');
        }
      } else if (rot && parseInt(tile.dataset.num) + length * 10 <= 109) {
        for (var _i2 = parseInt(tile.dataset.num); _i2 < parseInt(tile.dataset.num) + length * 10; _i2 += 10) {
          board.querySelector("[data-num='".concat(_i2, "']")).classList.remove('hover');
        }
      }
    });
  });
}

function shipPlacement(tiles, board, length, gameBoard) {
  var rot = false;
  var last = 0;
  document.querySelector('.rotate').addEventListener('click', function () {
    if (!rot) rot = true;else rot = false;
  });
  previewPlacement(tiles, board, length, rot);
  tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
      gameBoard.placeShip(length + last, parseInt(tile.dataset.num), rot);
      console.log(gameBoard.tiles);
      board.querySelectorAll('.hover').forEach(function (tile) {
        tile.classList.add('picked');
      });
      length = length - 1;
      if (length == 1) last = 2;

      if (length == 0) {
        document.querySelector('.rotate').innerHTML = 'START GAME';
        document.querySelector('.rotate').addEventListener('click', game);
        document.querySelector('.info').innerHTML = 'Ready?';
      }
    });
  });
}

var playerOne = (0,_components_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
boardGrid(boardOne);
var tiles = boardOne.querySelectorAll('.tile');
shipPlacement(tiles, boardOne, 5, playerOne.board);
boardGrid(boardTwo);
var playerTwo = (0,_components_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
playerTwo.board.randomize();

function game() {
  document.querySelector('.info').innerHTML = 'attack the opponents board';
  var aiTiles = boardTwo.querySelectorAll('.tile');
  aiTiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
      if (playerOne.makeAttack(parseInt(tile.dataset.num), playerTwo.board, false)) tile.classList.add('hit');else tile.classList.add('water');
      boardOne.querySelector("[data-num='".concat(playerTwo.makeAttack(1, playerOne.board, true))).classList.add('self-hit');

      if (playerOne.board.checkLoss()) {
        document.querySelector('.info').innerHTML = 'AI Wins!';
      }

      if (playerTwo.board.checkLoss()) {
        document.querySelector('.info').innerHTML = 'Player Wins!';
      }
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map