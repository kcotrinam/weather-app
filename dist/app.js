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
  constructor(value, measurement) {
    this.value = value;
    this.measurement = measurement;
    this.cityContainer = document.querySelector('.content');
  }

  transformTemp (temp) {
    switch (this.measurement) {
      case 'fahrenheit':
        return Math.round(temp - 273.15) * 9 / 5 + 32;
      case 'celsius':
        return Math.round(temp - 273.15);
      default:
        return temp
    }
  }

  get populateContainers () {
    this.cityContainer.innerHTML = ''
    console.log()
    const temp = this.transformTemp(this.value.main.temp)
    const mintemp = this.transformTemp(this.value.main.temp_min)
    const maxtemp = this.transformTemp(this.value.main.temp_max)
    const card =`
                  <div class="card">
                    <h1 class="card__city">${this.value.name}</h1>
                    <h2 class="card__temperature">Temperature: ${temp} °C</h2>
                    <p class="card__min-temperature">Temperature minimum: ${mintemp} °C</p>
                    <img src= "http://openweathermap.org/img/w/${this.value.weather[0].icon}.png" alt="${this.value.weather[0].description}"/>
                    <p class="card__max-temperature">Temperature maximum: ${maxtemp} °C</p>
                  </div>
                `
    return card
  }

  render () {
    this.cityContainer.insertAdjacentHTML('afterbegin', this.populateContainers)
  }
}

const searchWeather = async (city, measurement) => {
  const value = await (0,_request__WEBPACK_IMPORTED_MODULE_0__.default)(city)
  const weather = new Weather(value, measurement);
  weather.render();
}

const displayInfo = (ev) => {
  ev.preventDefault()
  const form = document.querySelector('form')
  const city = document.querySelector('.city-input').value;
  const measurement = document.querySelector('#measurement').value
  
  if (city) searchWeather(city, measurement);
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