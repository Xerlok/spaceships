/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aiTron3000.js":
/*!***************************!*\
  !*** ./src/aiTron3000.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AITron3000)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar AITron3000 = /*#__PURE__*/function () {\n  function AITron3000() {\n    _classCallCheck(this, AITron3000);\n  }\n  return _createClass(AITron3000, null, [{\n    key: \"makeMove\",\n    value: function makeMove(gameboard) {\n      var coords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attackCoords = coords;\n      if (coords === null) {\n        attackCoords = AITron3000.chooseSquare(gameboard.board);\n      }\n      gameboard.receiveAttack(attackCoords);\n      return coords;\n    }\n  }, {\n    key: \"chooseSquare\",\n    value: function chooseSquare(board) {\n      var squaresToAttack = [];\n      board.forEach(function (value, key) {\n        if (value.status !== 'H' && value.status !== 'M') {\n          squaresToAttack.push(key);\n        }\n      });\n      var squareToAttack = squaresToAttack[AITron3000.generateRandomInt(0, squaresToAttack.length - 1)];\n      return squareToAttack;\n    }\n  }, {\n    key: \"generateRandomInt\",\n    value: function generateRandomInt(min, max) {\n      return Math.floor(Math.random() * (max - min + 1)) + min;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://spaceships/./src/aiTron3000.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards)\n/* harmony export */ });\n/* harmony import */ var _starfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starfield */ \"./src/starfield.js\");\n/* eslint-disable */\n\nvar boardOneSquares = document.querySelectorAll('.board-1-square');\nvar boardTwoSquares = document.querySelectorAll('.board-2-square');\nvar mainMenu = document.querySelector('.main-menu');\nvar mainContainer = document.querySelector('.main-container');\nvar snglPlayerBtn = document.querySelector('.sngl-player');\nvar shipAxisBtn = document.querySelector('.ship-axis');\nvar ships = document.querySelectorAll('.ship-container');\nvar dragStartShipLength = null;\nvar placementAxis = 'x';\nfunction renderBoards(gameState) {\n  var players = [];\n  players.push(gameState.player1);\n  players.push(gameState.player2);\n  players.forEach(function (player) {\n    var board = player.gameboard.board;\n    var boardSquares;\n    var boardNumber;\n    if (player.type === 'human1') {\n      boardSquares = boardOneSquares;\n      boardNumber = '1';\n    } else {\n      boardSquares = boardTwoSquares;\n      boardNumber = '2';\n    }\n    boardSquares.forEach(function (boardSquare) {\n      var squareStatus = board.get(boardSquare.getAttribute('data')).status;\n      boardSquare.classList.remove(\"board-\".concat(boardNumber, \"-square-empty\"));\n      boardSquare.classList.remove(\"board-\".concat(boardNumber, \"-square-ship\"));\n      boardSquare.classList.remove(\"board-\".concat(boardNumber, \"-square-hit\"));\n      boardSquare.classList.remove(\"board-\".concat(boardNumber, \"-square-miss\"));\n      switch (squareStatus) {\n        case '':\n          boardSquare.classList.add(\"board-\".concat(boardNumber, \"-square-empty\"));\n          break;\n        case 'S':\n          boardSquare.classList.add(\"board-\".concat(boardNumber, \"-square-ship\"));\n          break;\n        case 'H':\n          boardSquare.classList.add(\"board-\".concat(boardNumber, \"-square-hit\"));\n          break;\n        case 'M':\n          boardSquare.classList.add(\"board-\".concat(boardNumber, \"-square-miss\"));\n          break;\n        default:\n          throw new Error('Something went wrong...');\n      }\n    });\n  });\n}\nfunction addBoardListeners(players, gameState) {\n  var board;\n  players.forEach(function (player) {\n    if (player.type === 'human1') {\n      board = boardOneSquares;\n    } else {\n      board = boardTwoSquares;\n    }\n    board.forEach(function (boardSquare) {\n      var squareStatus = player.gameboard.board.get(boardSquare.getAttribute('data')).status;\n      var squareCoords = boardSquare.getAttribute('data');\n      boardSquare.addEventListener('click', function () {\n        if (!player.isActive() && !gameState.isGameOver) {\n          if (squareStatus === 'S') {\n            squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);\n            gameState.switchPlayer();\n            renderBoards(gameState);\n          }\n          if (squareStatus === '') {\n            squareStatus = player.gameboard.receiveAttack(squareCoords, gameState);\n            gameState.switchPlayer();\n            renderBoards(gameState);\n          }\n        }\n      });\n    });\n  });\n}\nfunction dropShip(gameState, coords) {\n  var newShipCoords = [];\n  var adjacentSquare;\n  newShipCoords.push(coords);\n  if (placementAxis === 'x') {\n    if (dragStartShipLength > 1) {\n      for (var i = 1; i < dragStartShipLength; i += 1) {\n        adjacentSquare = \"\".concat(coords.charAt(0)).concat(parseInt(coords.charAt(1)) + i);\n        newShipCoords.push(adjacentSquare);\n      }\n    }\n  } else if (placementAxis = 'y') {\n    for (var _i = 1; _i < dragStartShipLength; _i += 1) {\n      adjacentSquare = \"\".concat(String.fromCharCode(coords.charCodeAt(0) + _i)).concat(coords.charAt(1) + coords.charAt(2));\n      newShipCoords.push(adjacentSquare);\n    }\n  }\n  gameState.player1.gameboard.placeShip(dragStartShipLength, newShipCoords);\n  renderBoards(gameState);\n}\nfunction addShipsPlacementListeners(gameState) {\n  ships.forEach(function (ship) {\n    ship.addEventListener('dragstart', function (e) {\n      dragStartShipLength = e.target.getAttribute('data-length');\n    });\n  });\n  boardOneSquares.forEach(function (boardOneSquare) {\n    boardOneSquare.addEventListener('dragenter', function (e) {\n      if (e.target.classList.contains('board-1-square')) {\n        e.target.classList.add('over');\n      }\n    });\n    boardOneSquare.addEventListener('dragleave', function (e) {\n      if (e.target.classList.contains('board-1-square')) {\n        e.target.classList.remove('over');\n      }\n    });\n    boardOneSquare.addEventListener('dragover', function (e) {\n      e.preventDefault();\n    });\n    boardOneSquare.addEventListener('drop', function (e) {\n      e.preventDefault();\n      if (e.target.classList.contains('board-1-square')) {\n        console.log('Ah!');\n        e.target.classList.remove('over');\n        var coords = e.target.getAttribute('data');\n        dropShip(gameState, coords);\n      }\n    });\n  });\n}\nfunction addButtonsListeners() {\n  snglPlayerBtn.addEventListener('click', function () {\n    mainMenu.style.display = 'none';\n    mainContainer.style.display = 'block';\n    (0,_starfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  shipAxisBtn.addEventListener('click', function () {\n    placementAxis = placementAxis === 'x' ? 'y' : 'x';\n    shipAxisBtn.innerText = placementAxis === 'x' ? 'Placement: Horizontal' : 'Placement: Vertical';\n  });\n}\nfunction addEventListeners(players, gameState) {\n  addBoardListeners(players, gameState);\n  addShipsPlacementListeners(gameState);\n  addButtonsListeners();\n}\n\n\n//# sourceURL=webpack://spaceships/./src/dom.js?");

/***/ }),

/***/ "./src/gameState.js":
/*!**************************!*\
  !*** ./src/gameState.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameState)\n/* harmony export */ });\n/* harmony import */ var _aiTron3000__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiTron3000 */ \"./src/aiTron3000.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar GameState = /*#__PURE__*/function () {\n  function GameState() {\n    var gameType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ai';\n    var player1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var player2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    _classCallCheck(this, GameState);\n    this.player1 = player1;\n    this.player2 = player2;\n    this.gameType = gameType;\n    this.isGameOver = true;\n  }\n  return _createClass(GameState, [{\n    key: \"switchPlayer\",\n    value: function switchPlayer() {\n      if (this.gameType === 'ai' && !this.isGameOver) {\n        _aiTron3000__WEBPACK_IMPORTED_MODULE_0__[\"default\"].makeMove(this.player1.gameboard);\n      } else {\n        if (this.player1.isActive()) {\n          this.player1.active = false;\n          this.player2.active = true;\n          return 'Player 2 turn';\n        }\n        this.player1.active = true;\n        this.player2.active = false;\n        return 'Player 1 turn';\n      }\n      return 'Player 1 turn';\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      this.player1.active = false;\n      this.player2.active = false;\n      this.isGameOver = true;\n      return this.isGameOver;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://spaceships/./src/gameState.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    var gameState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    _classCallCheck(this, Gameboard);\n    this.board = new Map();\n    this.ships = [];\n    this.gameState = gameState;\n  }\n  return _createClass(Gameboard, [{\n    key: \"buildBoard\",\n    value: function buildBoard() {\n      var _this = this;\n      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\n      letters.forEach(function (letter) {\n        for (var i = 1; i <= 10; i += 1) {\n          var key = \"\".concat(letter).concat(i);\n          _this.board.set(key, {\n            status: '',\n            ship: null\n          });\n        }\n      });\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(shipLength, coords) {\n      if (this.board.size === 0) {\n        throw new Error('Board is not build!');\n      }\n      var newShipCoordinates = [];\n      var newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipLength);\n      for (var i = 0; i < coords.length; i += 1) {\n        this.board.set(coords[i], {\n          status: 'S',\n          ship: newShip\n        });\n        newShipCoordinates.push(coords[i]);\n      }\n      this.ships.push(newShip);\n      return newShipCoordinates;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(coords) {\n      var attackedSquare = this.board.get(coords);\n      if (attackedSquare.status === '') {\n        attackedSquare.status = 'M';\n        return attackedSquare.status;\n      }\n      if (attackedSquare.status === 'S') {\n        attackedSquare.status = 'H';\n        attackedSquare.ship.hit();\n        this.isEndgame();\n        return attackedSquare.status;\n      }\n      return attackedSquare.status;\n    }\n  }, {\n    key: \"isEndgame\",\n    value: function isEndgame() {\n      var shipsSunk = [];\n      this.ships.forEach(function (ship) {\n        if (ship.isSunk()) {\n          shipsSunk.push(true);\n        }\n      });\n      if (shipsSunk.length === this.ships.length) {\n        this.gameState.gameOver();\n        return true;\n      }\n      return false;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://spaceships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameState */ \"./src/gameState.js\");\n/* harmony import */ var _starfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starfield */ \"./src/starfield.js\");\n\n\n\n\n\n\n(0,_starfield__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nvar gameState = new _gameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('ai');\nvar player1 = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Zerus', 'human1', new _gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameState));\nvar player2 = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('AItron3000', 'ai', new _gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameState));\ngameState.player1 = player1;\ngameState.player2 = player2;\nplayer1.gameboard.buildBoard();\nplayer2.gameboard.buildBoard();\nplayer1.active = true;\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addEventListeners)([player1, player2], gameState);\nplayer2.gameboard.placeShip(1, ['A1']);\nplayer2.gameboard.placeShip(2, ['B4', 'B5']);\nplayer2.gameboard.placeShip(3, ['G5', 'G6', 'G7']);\nplayer2.gameboard.placeShip(4, ['J1', 'J2', 'J3', 'J4']);\nplayer2.gameboard.placeShip(5, ['A7', 'B7', 'C7', 'D7', 'E7']);\n(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(gameState);\n\n//# sourceURL=webpack://spaceships/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Player = /*#__PURE__*/function () {\n  function Player(name, type, gameboard) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this.type = type;\n    this.gameboard = gameboard;\n    this.ai = null;\n    this.active = false;\n  }\n  return _createClass(Player, [{\n    key: \"isActive\",\n    value: function isActive() {\n      return this.active;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://spaceships/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits += 1;\n      if (this.isSunk()) {\n        return 'dead';\n      }\n      return 'hit!';\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.hits === this.length) {\n        this.sunk = true;\n        return true;\n      }\n      return false;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://spaceships/./src/ship.js?");

/***/ }),

/***/ "./src/starfield.js":
/*!**************************!*\
  !*** ./src/starfield.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addStars)\n/* harmony export */ });\nvar containers = document.querySelectorAll('.starfield');\nvar numStars = 200;\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction createStar(container) {\n  var star = document.createElement('div');\n  star.classList.add('star');\n  star.style.left = \"\".concat(getRandomInt(0, container.clientWidth), \"px\");\n  star.style.top = \"\".concat(getRandomInt(0, container.clientHeight), \"px\");\n  star.style.animationDelay = \"\".concat(getRandomInt(0, 20), \"s\");\n  return star;\n}\nfunction addStars() {\n  containers.forEach(function (container) {\n    for (var i = 0; i < numStars; i += 1) {\n      container.appendChild(createStar(container));\n    }\n  });\n}\n\n//# sourceURL=webpack://spaceships/./src/starfield.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-text-colour: lightblue;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  background-color: black;\r\n  color: var(--main-text-colour);\r\n}\r\n\r\np {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nheader {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.main-menu {\r\n  flex: 6;\r\n  display: none; \r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  flex: 6;\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr 1fr;\r\n}\r\n\r\n.ship-placement-container {\r\n  grid-column: 1;\r\n  justify-self: self-end;\r\n  align-self: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.ship-container {\r\n  display: flex;\r\n  padding: 1rem;\r\n}\r\n\r\n.boards-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10rem;\r\n  padding: 1rem;\r\n  grid-column: 2;\r\n  min-width: 1000px;\r\n}\r\n\r\n.ui {\r\n  grid-column: 1 / 4;\r\n}\r\n\r\n.player-1-container,\r\n.player-2-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  font-size: 1.5rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.star {\r\n  position: absolute;\r\n  width: 3px;\r\n  height: 3px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  animation: twinkle 2s infinite linear;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes twinkle {\r\n  0% { opacity: 1; }\r\n  50% { opacity: 0.4; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\ntable {\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n  background: radial-gradient(ellipse at bottom, #253c56 0%, #191e3b 100%);\r\n  position: relative;\r\n}\r\n\r\ntd {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 1px solid rgb(55, 166, 202);\r\n}\r\n\r\n.board-2-square-ship,\r\n.board-1-square-ship {\r\n  background-color: blue;\r\n}\r\n\r\n.board-2-square-hit,\r\n.board-1-square-hit {\r\n  background-color: red;\r\n}\r\n\r\n.board-2-square-miss,\r\n.board-1-square-miss {\r\n  background-color: gray;\r\n}\r\n\r\n.board-1-square.over {\r\n  background-color: green;\r\n}\r\n\r\n.ui {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nfooter {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  margin: 2rem;\r\n}\r\n\r\nbutton {\r\n  align-items: center;\r\n  height: 50px;\r\n  width: 200px;\r\n  font-size: 2rem;\r\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.377);\r\n  font-family: pixel;\r\n  background-color: darkslategrey;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: .25rem;\r\n  color: var(--main-text-colour);\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  line-height: 1.25;\r\n  margin: 0;\r\n  min-height: 3rem;\r\n  padding: calc(.875rem - 1px) calc(1.5rem - 1px);\r\n  text-decoration: none;\r\n  transition: all 250ms;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  vertical-align: baseline;\r\n  width: auto;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\r\n  \r\n}\r\n\r\nbutton:hover {\r\n  transform: translateY(-1px);\r\n}\r\n\r\nbutton:active {\r\n  background-color: #F0F0F1;\r\n  border-color: rgba(0, 0, 0, 0.15);\r\n  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;\r\n  color: rgba(0, 0, 0, 0.65);\r\n  transform: translateY(0);\r\n}\r\n\r\n.ship-axis {\r\n  font-size: 1.5rem;\r\n  height: 60px;\r\n  width: 120px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://spaceships/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://spaceships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://spaceships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://spaceships/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://spaceships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;