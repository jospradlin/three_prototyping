"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["index_ts"],{

/***/ "../pkg/snake_game.js":
/*!****************************!*\
  !*** ../pkg/snake_game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Direction: () => (/* binding */ Direction),\n/* harmony export */   GameStatus: () => (/* binding */ GameStatus),\n/* harmony export */   Snake: () => (/* binding */ Snake),\n/* harmony export */   SnakeCell: () => (/* binding */ SnakeCell),\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initSync: () => (/* binding */ initSync)\n/* harmony export */ });\n/* harmony import */ var _snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js */ \"../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js\");\n\n\nlet wasm;\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nconst Direction = Object.freeze({ UP:0,\"0\":\"UP\",DOWN:1,\"1\":\"DOWN\",RIGHT:2,\"2\":\"RIGHT\",LEFT:3,\"3\":\"LEFT\", });\n/**\n*/\nconst GameStatus = Object.freeze({ WON:0,\"0\":\"WON\",LOST:1,\"1\":\"LOST\",PLAYED:2,\"2\":\"PLAYED\", });\n/**\n*/\nclass Snake {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Snake.prototype);\n        obj.__wbg_ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_snake_free(ptr);\n    }\n    /**\n    * @param {number} spawn_index\n    * @param {number} size\n    * @returns {Snake}\n    */\n    static new(spawn_index, size) {\n        const ret = wasm.snake_new(spawn_index, size);\n        return Snake.__wrap(ret);\n    }\n}\n/**\n*/\nclass SnakeCell {\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_snakecell_free(ptr);\n    }\n}\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(World.prototype);\n        obj.__wbg_ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} snake_index\n    * @param {number} starting_size\n    * @returns {World}\n    */\n    static new(width, snake_index, starting_size) {\n        const ret = wasm.world_new(width, snake_index, starting_size);\n        return World.__wrap(ret);\n    }\n    /**\n    */\n    start_game() {\n        wasm.world_start_game(this.__wbg_ptr);\n    }\n    /**\n    * @returns {GameStatus | undefined}\n    */\n    status() {\n        const ret = wasm.world_status(this.__wbg_ptr);\n        return ret === 3 ? undefined : ret;\n    }\n    /**\n    * @returns {number}\n    */\n    points() {\n        const ret = wasm.world_points(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {string}\n    */\n    game_status_text() {\n        let deferred1_0;\n        let deferred1_1;\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_game_status_text(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            deferred1_0 = r0;\n            deferred1_1 = r1;\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.world_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    size() {\n        const ret = wasm.world_size(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number | undefined}\n    */\n    reward_cell() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.world_reward_cell(retptr, this.__wbg_ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n        }\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head_index() {\n        const ret = wasm.world_snake_head_index(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_cells() {\n        const ret = wasm.world_snake_cells(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    snake_length() {\n        const ret = wasm.world_snake_length(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    */\n    step() {\n        wasm.world_step(this.__wbg_ptr);\n    }\n    /**\n    * @param {Direction} new_direction\n    */\n    handle_input(new_direction) {\n        wasm.world_handle_input(this.__wbg_ptr, new_direction);\n    }\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_rnd_1f1903d658d226dd = function(arg0) {\n        const ret = (0,_snippets_snake_game_027f5cd2d64d2885_www_utils_rnd_js__WEBPACK_IMPORTED_MODULE_0__.rnd)(arg0 >>> 0);\n        return ret;\n    };\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, maybe_memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedInt32Memory0 = null;\n    cachedUint8Memory0 = null;\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(input) {\n    if (wasm !== undefined) return wasm;\n\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ \"../pkg/snake_game_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await input, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://www/../pkg/snake_game.js?");

/***/ }),

/***/ "../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js":
/*!********************************************************************!*\
  !*** ../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rnd: () => (/* binding */ rnd)\n/* harmony export */ });\n\nfunction rnd(max) {\n    return Math.floor(Math.random() * max);\n}\n\n//# sourceURL=webpack://www/../pkg/snippets/snake_game-027f5cd2d64d2885/www/utils/rnd.js?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snake_game */ \"../pkg/snake_game.js\");\n/* harmony import */ var _utils_rnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/rnd */ \"./utils/rnd.js\");\n\n\n(0,snake_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function (wasm) {\n    var CELL_SIZE = 20;\n    var WORLD_WIDTH = 8;\n    var snakeSpawnIndex = (0,_utils_rnd__WEBPACK_IMPORTED_MODULE_0__.rnd)(WORLD_WIDTH * WORLD_WIDTH);\n    var STARTING_SNAKE_SIZE = 3;\n    var world = snake_game__WEBPACK_IMPORTED_MODULE_1__.World.new(WORLD_WIDTH, snakeSpawnIndex, STARTING_SNAKE_SIZE);\n    var worldWidth = world.width();\n    var gameControlBtn = document.getElementById(\"game-control-btn\");\n    var gameStatus = document.getElementById(\"game-status\");\n    var gamePoints = document.getElementById(\"points\");\n    var canvas = document.getElementById(\"snake-canvas\");\n    var ctx = canvas.getContext(\"2d\");\n    canvas.height = worldWidth * CELL_SIZE;\n    canvas.width = worldWidth * CELL_SIZE;\n    gameControlBtn.addEventListener(\"click\", function (_) {\n        var status = world.status();\n        if (status === undefined) {\n            gameControlBtn.textContent = \"Playing...\";\n            world.start_game();\n            play();\n        }\n        else {\n            location.reload();\n        }\n    });\n    document.addEventListener(\"keydown\", function (e) {\n        switch (e.code) {\n            case \"ArrowUp\":\n            case \"KeyW\":\n            case \"Numpad8\":\n                world.handle_input(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.UP);\n                break;\n            case \"ArrowDown\":\n            case \"KeyS\":\n            case \"Numpad2\":\n                world.handle_input(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.DOWN);\n                break;\n            case \"ArrowLeft\":\n            case \"KeyA\":\n            case \"Numpad4\":\n                world.handle_input(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.LEFT);\n                break;\n            case \"ArrowRight\":\n            case \"KeyD\":\n            case \"Numpad6\":\n                world.handle_input(snake_game__WEBPACK_IMPORTED_MODULE_1__.Direction.RIGHT);\n                break;\n        }\n    });\n    function drawWorld() {\n        ctx.beginPath();\n        for (var x = 0; x < worldWidth + 1; x++) {\n            ctx.moveTo(CELL_SIZE * x, 0);\n            ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);\n        }\n        for (var y = 0; y < worldWidth + 1; y++) {\n            ctx.moveTo(0, CELL_SIZE * y);\n            ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);\n        }\n        ctx.stroke();\n    }\n    function drawSnake() {\n        var snakeCellPtr = world.snake_cells();\n        var snakeLength = world.snake_length();\n        var snakeCells = new Uint32Array(wasm.memory.buffer, snakeCellPtr, snakeLength);\n        // could use 'reverse()' on SnakeCells array as alternative\n        snakeCells\n            .filter(function (cellIdx, i) { return !(i > 0 && cellIdx === snakeCells[0]); })\n            .forEach(function (cellIndex, i) {\n            var col = cellIndex % worldWidth;\n            var row = Math.floor(cellIndex / worldWidth);\n            // snake head getting overwritten by body on 'crash'\n            ctx.fillStyle = i === 0 ? \"#121276\" : \"#5555ff\";\n            ctx.beginPath();\n            ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        });\n        //OLD -const snakeIndex = world.snake_head_index();\n        ctx.stroke();\n    }\n    function drawGameStatus() {\n        gameStatus.textContent = world.game_status_text();\n        gamePoints.textContent = world.points().toString();\n    }\n    function draw_reward_cell() {\n        var rewardCellLocation = world.reward_cell();\n        var reward_col = rewardCellLocation % worldWidth;\n        var reward_row = Math.floor(rewardCellLocation / worldWidth);\n        ctx.fillStyle = \"#ff0000\";\n        ctx.beginPath();\n        ctx.fillRect(reward_col * CELL_SIZE, reward_row * CELL_SIZE, CELL_SIZE, CELL_SIZE);\n        ctx.stroke();\n    }\n    function render() {\n        drawWorld();\n        drawSnake();\n        draw_reward_cell();\n        drawGameStatus();\n    }\n    function play() {\n        var fps = 5;\n        var status = world.status();\n        if (status == snake_game__WEBPACK_IMPORTED_MODULE_1__.GameStatus.WON || status == snake_game__WEBPACK_IMPORTED_MODULE_1__.GameStatus.LOST) {\n            gameControlBtn.textContent = \"Replay?\";\n            return;\n        }\n        //setInterval (many times) vs setTimeout (once)\n        setTimeout(function () {\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            world.step();\n            render();\n            // the method takes a callback to be invoked before next re-render\n            requestAnimationFrame(play);\n        }, 1000 / fps);\n    }\n    drawWorld();\n});\n\n\n//# sourceURL=webpack://www/./index.ts?");

/***/ }),

/***/ "./utils/rnd.js":
/*!**********************!*\
  !*** ./utils/rnd.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rnd: () => (/* binding */ rnd)\n/* harmony export */ });\n\nfunction rnd(max) {\n    return Math.floor(Math.random() * max);\n}\n\n//# sourceURL=webpack://www/./utils/rnd.js?");

/***/ }),

/***/ "../pkg/snake_game_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/snake_game_bg.wasm ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f80302f07d0ef3a3983.wasm\";\n\n//# sourceURL=webpack://www/../pkg/snake_game_bg.wasm?");

/***/ })

}]);