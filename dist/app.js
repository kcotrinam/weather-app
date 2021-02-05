/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");



const formBtn = document.querySelector('button')

formBtn.addEventListener('click', e => (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.default)(e))


/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/modules/request.js");


class Weather {
  constructor() {
    this.cityContainer = document.querySelector('.content .city');
    this.tempContainer = document.querySelector('.content .temp');
    this.minTempContainer = document.querySelector('.content .mintemp');
    this.maxTempContainer = document.querySelector('.content .maxtemp');
  }

  transformTemp (temp) {
    return Math.round(temp - 273.15)
  }

  populateContainers (city, temperature, minTemperature, maxTemperature) {
    this.cityContainer.innerHTML = `City: ${city}`;
    this.tempContainer.innerHTML = `Temperature: ${temperature} °C`;
    this.minTempContainer.innerHTML = `Temperature minimum: ${minTemperature} °C`;
    this.maxTempContainer.innerHTML = `Temperature maximum: ${maxTemperature} °C`;
  }

  render (city, temp, minTemp, maxTemp) {
    const tmp = this.transformTemp(temp);
    const mTemp = this.transformTemp(minTemp);
    const mxTemp = this.transformTemp(maxTemp);
    this.populateContainers(city, tmp, mTemp, mxTemp);
  }
}

const searchWeather = async (city) => {
  const value = await (0,_request__WEBPACK_IMPORTED_MODULE_0__.default)(city)
  
  const w = new Weather();
  w.render(value.name, value.main.temp, value.main.temp_min, value.main.temp_max);
}

const displayInfo = (ev) => {
  ev.preventDefault()
  const form = document.querySelector('form')
  const city = document.querySelector('.city-input').value;
  if (city) searchWeather(city);
  form.reset()

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayInfo);

/***/ }),

/***/ "./src/modules/request.js":
/*!********************************!*\
  !*** ./src/modules/request.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const apiKey = '90389a28c75f30a2126f4ec7e1c08520'

const getData = async (city) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const json = response.json();
  return json
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map