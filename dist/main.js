/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/banana.js":
/*!***********************!*\
  !*** ./src/banana.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banana; });\n\n\nclass Banana {\n  constructor(options) {\n    this.x = options.x\n    this.y = options.y\n    this.dimension = [40, 40]\n    this.speed = 115;\n  }\n\n  draw(ctx) {\n    let banana = new Image()\n    banana.src = './dist/banana.png';\n    ctx.drawImage(banana, 0, 0, 40, 40, this.x, this.y, 40, 40)\n  }\n\n  update(deltaTime) {\n    this.y += this.speed / deltaTime\n  }\n }\n\n//# sourceURL=webpack:///./src/banana.js?");

/***/ }),

/***/ "./src/blueshell.js":
/*!**************************!*\
  !*** ./src/blueshell.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlueShell; });\n\nclass BlueShell {\n  constructor(options) {\n    this.x = options.x\n    this.y = options.y\n    this.canvas = options.canvas\n    this.dimension = [50, 50]\n    this.speed = 100;\n    this.speedY = 100;\n  }\n\n  draw(ctx) {\n    let blueShell = new Image();\n    blueShell.src = './dist/blueshell.png';\n    ctx.drawImage(blueShell, 0, 0, 50, 50, this.x, this.y, 50, 50)\n  }\n\n  update(deltaTime) {\n    this.x += (this.speed * 2) / deltaTime\n    this.y += this.speedY / deltaTime\n\n    if (this.x > this.canvas.width - 50 || this.x < 0) {\n      this.speed = this.speed * -1\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/blueshell.js?");

/***/ }),

/***/ "./src/bowser.js":
/*!***********************!*\
  !*** ./src/bowser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bowser; });\n\nclass Bowser {\n  constructor(canvas) {\n    this.x = Math.floor(Math.random() * (canvas.width - 30));\n    this.y = Math.floor(Math.random() * canvas.height / 2) - canvas.height / 2 ;\n    this.dimension = [30, 35];\n    this.speed = 65;\n  }\n\n  draw(ctx) {\n   let bowser = new Image()\n   bowser.src = './dist/bowser.gif'\n    ctx.drawImage(\n      bowser,\n      193,\n      0,\n      30,\n      35,\n      this.x,\n      this.y,\n      30,\n      35\n    )\n  }\n\n  update(deltaTime) {\n    this.y += this.speed / deltaTime\n  }\n  \n}\n\n//# sourceURL=webpack:///./src/bowser.js?");

/***/ }),

/***/ "./src/donkey.js":
/*!***********************!*\
  !*** ./src/donkey.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Donkey; });\n/* harmony import */ var _banana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banana */ \"./src/banana.js\");\n/* harmony import */ var _blueshell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blueshell */ \"./src/blueshell.js\");\n\n\n\nclass Donkey {\n  constructor(canvas) {\n    this.dimension = [100, 100]\n    this.x = canvas.width / 2 - 55\n    this.y = 0;\n    this.speed = 50;\n    this.canvas = canvas\n    this.hp = 100\n    this.bananas = []\n    this.blueShells = []\n    this.bananathrown = 0\n    this.ctx = canvas.getContext('2d')\n  }\n\n  draw(ctx) {\n    let donkey = new Image()\n    donkey.src = './dist/donkey.gif';\n    ctx.drawImage(donkey, 0, 70, 35, 35, this.x, this.y, this.dimension[0], this.dimension[1])\n  }\n\n  fireBanana() {\n    if (this.bananas.length < 1) {\n      this.bananathrown += 1\n      let banana = new _banana__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({x: this.x, y: this.y})\n      this.bananas.push(banana);\n    }\n  }\n\n  fireShell() {\n    if (this.bananathrown % 5 === 0 && this.blueShells.length < 1) {\n      let blueShell = new _blueshell__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ x: this.x, y: this.y, canvas: this.canvas})\n      this.blueShells.push(blueShell)\n    }\n  }\n\n  cleanUpAmmo() {\n    this.bananas.forEach((banana, i) => {\n      if (banana.y > this.canvas.height) {\n        this.bananas.splice(i, 1);\n      }\n    })\n    if (this.blueShells[0] && this.blueShells[0].y > this.canvas.height) {\n      this.blueShells.splice(0 , 1)\n    }\n  }\n\n  update(deltaTime) {\n    this.x += this.speed / deltaTime\n    this.fireBanana();\n    this.fireShell();\n    this.bananas.forEach(banana => banana.update(deltaTime))\n    this.bananas.forEach(banana => banana.draw(this.ctx))\n    this.blueShells.forEach(shell => shell.update(deltaTime))\n    this.blueShells.forEach(shell => shell.draw(this.ctx))\n\n    this.cleanUpAmmo();\n    if (this.x > this.canvas.width - 100 || this.x < 0) {\n      this.speed = this.speed * -1\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/donkey.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bowser */ \"./src/bowser.js\");\n/* harmony import */ var _mario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mario */ \"./src/mario.js\");\n/* harmony import */ var _donkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donkey */ \"./src/donkey.js\");\n\n\n\n\nconst NUM_BOWSERS = 2;\n\nclass Game {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d')\n    this.bowsers = [];\n    this.backgroundY = -602\n    this.score = 0;\n    this.level = 1;\n    this.lost = false\n    this.win = false\n    this.playAgain = document.querySelector('.hide')\n  }\n\n  \n\n  setup() {\n    this.populateMario();\n    this.populateBowsers();\n  }\n\n  update(deltaTime) {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    let image = new Image();\n    image.src = './dist/road.jpg'\n    this.ctx.drawImage(image, 0, this.backgroundY += 10)\n    if (this.backgroundY >= -2) {\n      this.backgroundY = -602\n    }\n    this.ctx.fillStyle = 'white'\n    this.ctx.font = '30px Verdana'\n    this.ctx.fillText(this.score, 10, 30)\n    if (this.donkey) {\n      this.ctx.font = '15px Verdana'\n      this.ctx.fillText(`Donkey's HP:${this.donkey.hp}`, 10, 55)\n      this.ctx.font = '30px Verdana'\n    }\n    if (this.lost) {      \n      this.playAgain.classList.remove('hide');\n      this.playAgain.addEventListener('click', () => {\n        this.score = 0;\n        this.level = 1;\n        this.bowsers = []\n        this.mario.ammo = 3;\n        this.mario.shells = []\n        this.mario.x = this.canvas.width / 2 - 15;\n        this.mario.y = this.canvas.height - 40;\n        this.lost = false;\n        this.playAgain.classList.add('hide')\n      })\n      // debugger\n      return\n    } else if (this.win) {\n      this.ctx.fillText('You Win', this.canvas.width / 2 - 60, this.canvas.height / 2)\n      return\n    }\n\n    this.renderAmmos();\n    this.addMoreBowsers();\n    this.levelUp();\n    this.garbageBowsers();\n    this.mario.update(deltaTime);\n    this.mario.draw(this.ctx);\n    this.bowsers.forEach(bowser => bowser.update(deltaTime));\n    this.bowsers.forEach(bowser => bowser.draw(this.ctx));\n    if (this.donkey) {\n      this.donkey.update(deltaTime);\n      this.donkey.draw(this.ctx);\n    }\n    this.bowsersGetsHit();\n    this.bowersHitMario()\n    this.marioHitByBanana();\n    this.marioHitByShell();\n    this.donkeyHitByShell();\n  }\n\n  renderAmmos() {\n    let redShell = new Image()\n    redShell.src = './dist/redshell.png'\n    if (this.mario.ammo === 3) {\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 40, 10, 50, 50)\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 60, 10, 50, 50)\n    } else if (this.mario.ammo === 2) {\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 40, 10, 50, 50)\n    } else if (this.mario.ammo === 1) {\n      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)\n    }\n  }\n\n  addMoreBowsers() {\n    if (this.score >= 3000) return\n   let bowserHeights = this.bowsers.map(bowser => bowser.y)\n   let allDone = bowserHeights.every(height => height > 0);\n   if (allDone) {\n     this.populateBowsers();\n   }\n  }\n\n  levelUp() {\n    if (this.score >= 1000 && this.score < 2000 && !this.donkey) {\n      this.bowsers.forEach(bowser => bowser.speed = 80)\n    } else if (this.score >= 2000 && this.score < 3000) {\n      this.bowsers.forEach(bowser => bowser.speed = 100)\n    } else if (this.score >= 3000 && this.score < 4000 && !this.donkey) {\n    //   this.bowsers.forEach(bowser => bowser.speed = 120)\n    // } else if (this.score >= 4000 && this.score < 5000) {\n    //   this.bowsers.forEach(bowser => bowser.speed = 140)\n    // } else if (this.score >= 5000) {\n      this.bowsers = [];\n      this.donkey = new _donkey__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.canvas);\n      this.donkey.draw(this.ctx);\n    }\n  }\n\n  populateMario() {\n    let mario = new _mario__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas);\n    mario.draw(this.ctx);\n    this.mario = mario;\n  }\n\n\n  populateBowsers() {\n    for (let i = 0; i < NUM_BOWSERS; i++) {\n      let newBowser = new _bowser__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas);\n      newBowser.draw(this.ctx);\n      this.bowsers.push(newBowser)\n    }\n  }\n\n  garbageBowsers() {\n    for (let i = 0; i < this.bowsers.length; i++) {\n      if (this.bowsers[i].y > this.canvas.height) {\n        this.bowsers.splice(i, 1);\n      }\n    }\n  }\n\n  remove(object) {\n    if (object instanceof _bowser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bowsers.splice(this.bowsers.indexOf(object), 1)\n    } else if (object instanceof _mario__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.mario = null;\n    } \n  }\n\n  collidedWith(obj1, obj2) {\n    let top1 = obj1.y\n    let bot1 = obj1.y + obj1.dimension[1]\n    let right1 = obj1.x + obj1.dimension[0]\n    let left1 = obj1.x\n    let top2 = obj2.y\n    let bot2 = obj2.y + obj2.dimension[1]\n    let right2 = obj2.x + obj2.dimension[0]\n    let left2 = obj2.x\n    if (top1 > bot2 || right1 < left2 || bot1 < top2 || left1 > right2) {\n      return false\n    }\n    return true\n  }\n\n  bowersHitMario() {\n    this.bowsers.forEach(bowser => {\n      if (this.collidedWith(bowser, this.mario)) {\n        this.lost = true\n      }\n    })\n  }\n\n  bowsersGetsHit() {\n    this.bowsers.forEach((bowser) => {\n      this.mario.shells.forEach((shell) => {\n        if (this.collidedWith(bowser, shell)) {\n          this.remove(bowser)\n          this.mario.deleteShell(shell)\n          this.score += 100;\n        }\n      })\n    })\n  }\n\n  marioHitByBanana() {\n    if (this.donkey) {\n      this.donkey.bananas.forEach(banana => {\n        if (this.collidedWith(banana, this.mario)) {\n          this.lost = true\n        }\n      })\n    }\n  }\n\n  marioHitByShell() {\n    if (this.donkey && this.donkey.blueShells[0]) {\n      if (this.collidedWith(this.donkey.blueShells[0], this.mario)) {\n        this.lost = true\n      }\n    }\n  }\n\n  donkeyHitByShell() {\n    if (this.donkey) {\n      this.mario.shells.forEach(shell => {\n        if (this.collidedWith(shell, this.donkey)) {\n          this.donkey.hp -= 10\n          this.mario.deleteShell(shell)\n        \n          if (this.donkey.hp === 0) {\n            this.win = true;\n          }\n        }\n      })\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  const playbtn = document.getElementById('play')\n  canvas.width = 400;\n  canvas.height = 600;\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, 400, 600)\n\n \n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  game.setup()\n\n  new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game.mario);\n\n  let lastTime = 0;\n  let start = false\n  const gameloop = (timeStamp) => {\n    let deltaTime = timeStamp - lastTime\n    lastTime = timeStamp;\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n    if (start) {\n      game.update(deltaTime)\n    } else {\n      let image = new Image();\n      image.src = './dist/road.jpg'\n      ctx.drawImage(image, 0, 0)\n      playbtn.addEventListener('click', () => {\n        start = true\n        playbtn.style.display = 'none'\n      })\n\n    }\n    requestAnimationFrame(gameloop)\n  }\n\n  requestAnimationFrame(gameloop)\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n\nclass InputHandler {\n  constructor(mario) {\n    this.pressed = {}\n    document.addEventListener('keydown', (e) => {\n \n      switch(e.keyCode) {\n        case 65:\n          mario.moveLeft()\n         \n          break;\n        case 68:\n          mario.moveRight()\n         \n          break;\n        case 87:\n          mario.moveUp();\n       \n          break;\n        case 83:\n          mario.moveDown()\n          break;\n        \n      }\n    })\n\n\n    document.addEventListener('keyup', (e) => {\n\n      switch (e.keyCode) {\n        case 65:\n          if (mario.speedX < 0) {\n            mario.stopX()\n          }\n          break;\n        case 68:\n          if (mario.speedX > 0) {\n            mario.stopX()\n          }\n          break;\n        case 87:\n          if (mario.speedY < 0) {\n            mario.stopY()\n          }\n          break;\n        case 83:\n          if (mario.speedY > 0) {\n            mario.stopY()\n          }\n          break;\n        case 75:\n          mario.firing = true\n          break;\n        case 74:\n          mario.reload()\n          break;\n      }\n    })\n\n  }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/mario.js":
/*!**********************!*\
  !*** ./src/mario.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mario; });\n/* harmony import */ var _shell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell */ \"./src/shell.js\");\n\n\nclass Mario {\n  constructor(canvas) {\n    this.x = canvas.width / 2 - 15;\n    this.y = canvas.height - 40;\n    this.ctx = canvas.getContext('2d');\n    this.dimension = [30, 35]\n    this.speedX = 0;\n    this.speedY = 0;\n    this.velX = 45;\n    this.velY = 55;\n    this.canvasWidth = canvas.width\n    this.canvasHeight = canvas.height\n    this.color = 'red';\n    this.shells = [];\n    this.firing = false\n    this.ammo = 3\n  }\n\n  draw(ctx) {\n  \n    let mario = new Image();\n    mario.src = './dist/mario.gif';\n   \n    ctx.drawImage(\n      mario,\n      180,\n      34,\n      28,\n      35,\n      this.x,\n      this.y,\n      30,\n      35\n    )\n  }\n\n  moveLeft() {\n    this.speedX = -this.velX;\n  }\n  \n  moveRight() {\n    this.speedX = this.velX;\n  }\n\n  moveUp() {\n    this.speedY = -this.velY;\n  }\n\n  moveDown() {\n    this.speedY = this.velY;\n  }\n\n  stopX() {\n    this.speedX = 0;\n  }\n\n  stopY() {\n    this.speedY = 0;\n  }\n\n  fire() {\n    if (this.ammo === 0 || this.shells.length >= 3) return\n    if (this.firing) {\n      const newShell = new _shell__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        x: this.x,\n        y: this.y\n      })\n      newShell.draw(this.ctx)\n      newShell.speed = newShell.fireSpeed\n      this.shells.push(newShell)\n      this.firing = false\n      this.ammo -= 1\n    }\n  }\n\n  reload() {\n    if (this.ammo === 0) {\n      setTimeout(() => {\n        this.ammo = 3;\n\n      }, 1000)\n    } else {\n      return\n    }\n  }\n\n\n  cleanUp() {\n    this.shells.forEach((shell, i) => {\n      if (shell.y < 0) {\n        this.shells.splice(i, 1)\n      }\n    })\n  }\n\n  deleteShell(shell) {\n    this.shells.splice(this.shells.indexOf(shell), 1)\n  }\n\n  update(deltaTime) {\n    \n    this.x += this.speedX / deltaTime;\n    this.y += this.speedY / deltaTime;\n    \n    this.cleanUp()\n    this.fire()\n    this.shells.forEach(shell => shell.update(deltaTime))\n    this.shells.forEach(shell => shell.draw(this.ctx))\n    if (this.x < 0) {\n      this.x = 0\n    }\n    if (this.x > this.canvasWidth - 30) {\n      this.x = this.canvasWidth - 30\n    }\n    if (this.y < 0) {\n      this.y = 0\n    } \n    if (this.y > this.canvasHeight - 40) {\n      this.y = this.canvasHeight -40\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/mario.js?");

/***/ }),

/***/ "./src/shell.js":
/*!**********************!*\
  !*** ./src/shell.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shell; });\n\n\nclass Shell {\n  constructor(options) {\n    this.dimension = [16, 16];\n    this.x = options.x;\n    this.y = options.y;\n    this.speed = 0;\n    this.fireSpeed = -75;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = 'purple';\n    // ctx.fillRect(this.x, this.y, this.dimension[0], this.dimension[1])\n    let redShell = new Image()\n    redShell.src = './dist/redshell.png'\n    ctx.drawImage(\n      redShell,\n      0,\n      0,\n      16,\n      16,\n      this.x,\n      this.y,\n      16,\n      16\n\n    )\n  }\n\n  update(deltaTime) {\n    this.y += this.speed / deltaTime\n  }\n}\n\n//# sourceURL=webpack:///./src/shell.js?");

/***/ })

/******/ });