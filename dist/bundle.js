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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\np {\n  font-size: 1.6rem;\n  max-width: 38rem;\n  text-align: left-justify;\n}\n\na:hover {\n  transform: translateY(3px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\np {\n  margin-bottom: 1rem;\n}\n\nh1 {\n  font-size: 2.4rem;\n}\n\nh2 {\n  font-size: 2.2rem;\n}\n\nh3 {\n  font-size: 1.8rem;\n}\n\nh4 {\n  font-size: 1.6rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n}\n\nh6 {\n  font-size: 1.4rem;\n}\n\nh4,\nh5,\nh6 {\n  text-transform: uppercase;\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Set core body defaults */\nbody {\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Natural flow and rhythm in articles by default */\n/*\narticle > * + * {\n  margin-top: 1em;\n}\n*/\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n.content {\n  animation: transitionIn 1.75s, slideIn 0.75s;\n}\n\n.schedule {\n  animation: transitionIn 1.75s, slideIn 1.75s;\n}\n\n@keyframes transitionIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  from {\n    transform: translate(10rem);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n.btn {\n  border: none;\n  text-transform: uppercase;\n  padding: 2rem;\n  width: 15rem;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  font-size: 1.6rem;\n}\n.btn--color-white {\n  background-color: #eee;\n  color: #eee;\n}\n.btn--center {\n  position: relative;\n  display: inline-block;\n}\n.btn:active {\n  transform: translateY(1px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n.btn:hover {\n  transform: translateY(3px);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.header__logo {\n  height: 3rem;\n}\n\n.header__nav {\n  background-color: #cb564d;\n}\n.header__nav a {\n  text-decoration: none;\n  font-family: Lato, sans-serif;\n  font-size: 1.5rem;\n  padding: 0 1%;\n}\n\n.footer {\n  min-height: 3rem;\n  text-decoration: none;\n  font-family: Lato, sans-serif;\n  background-color: #cb564d;\n}\n.footer__ul {\n  list-style-type: none;\n}\n\n.row {\n  max-width: 114rem;\n  margin: 0 auto;\n  background-color: #eee;\n  color: #eee;\n}\n.row:not(:last-child) {\n  margin-bottom: 8rem;\n}\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row [class^=col-] {\n  background-color: #cb564d;\n  float: left;\n}\n.row [class^=col-]:not(:last-child) {\n  margin-right: 3rem;\n}\n.row .col-1-of-2 {\n  width: calc((100% - 3rem) / 2);\n}\n.row .col-1-of-3 {\n  width: calc((100% - (2 * 3rem)) / 3);\n}\n.row .col-2-of-3 {\n  width: calc( 2 * ((100% - (2 * 3rem)) / 3) + 3rem );\n}\n.row .col-1-of-4 {\n  width: calc((100% - (3 * 3rem)) / 4);\n}\n.row .col-2-of-4 {\n  width: calc( (2 * (100% - (3 * 3rem)) / 4) + 3rem );\n}\n.row .col-3-of-4 {\n  width: calc( (3 * (100% - (3 * 3rem)) / 4) + 2 * 3rem );\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.header {\n  height: 95vh;\n  background-image: url(/Users/johnpfannkuchen/Documents/Development/crowfest2020/dist/img/artists/glenmarys_ghost.jpg);\n  background-size: cover;\n}\n\n@media only screen and (min-width: 50rem) {\n  #content {\n    grid-auto-columns: 1fr 1fr;\n    grid-template-areas: \"content-left content-right\";\n    gap: 0.5rem;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/data/schedule.js":
/*!*************************************!*\
  !*** ./src/assets/data/schedule.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const schedule = [
  {
    day: 'FRIDAY',
    time: '5:30-6:00',
    artist: 'Kevin Doupe',
    stage: 'Side Stage'
  },
  {
    day: 'FRIDAY',
    time: '6:00-7:00',
    artist: 'Uncle Uku and The Guise',
    stage: 'Main Stage'
  },
  {
    day: 'FRIDAY',
    time: '7:00-7:30',
    artist: 'Tim Ruffo [with special guest Michaela Clark]',
    stage: 'Side Stage'
  },
  {
    day: 'FRIDAY',
    time: '7:30-8:30',
    artist: "The Smokin' Crows",
    stage: 'Main Stage'
  },
  {
    day: 'FRIDAY',
    time: '8:30-9:00',
    artist: 'Marty ',
    stage: 'Side Stage'
  },
  {
    day: 'FRIDAY',
    time: '9:00-10:30',
    artist: "Eagle's Tribute",
    stage: 'Main Stage'
  },
  {
    day: 'FRIDAY',
    time: '10:30',
    artist: 'Fireside Jam',
    stage: 'Fireside'
  },
  {
    day: 'SATURDAY',
    time: '12:00-1:00',
    artist: "Glenmary's Ghost",
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '1:00-1:15',
    artist: 'George Gleason',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '1:15-2:15',
    artist: 'Next to Kin',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '2:15-2:30',
    artist: 'Nick Ruffo',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '2:30-3:30',
    artist: 'A Part of Pluto',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '3:30-3:45',
    artist: 'Chris Ruffo',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '3:45-4:45',
    artist: 'J Floyd & The Grave Sitters',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '4:45-5:00',
    artist: 'Gene Hummel',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '5:00-6:00',
    artist: 'Mike Davis and LBE',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '6:00-6:15',
    artist: 'Tim Ruffo',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '6:15-7:15',
    artist: 'Woodshed Prophets',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '7:15-7:45',
    artist: 'Under the Rug',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '7:45-8:45',
    artist: 'Tijuana Danger Dogs',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '8:45-9:15',
    artist: 'Bootknife',
    stage: 'Side stage'
  },
  {
    day: 'SATURDAY',
    time: '9:15-10:30',
    artist: 'Randy McStine Trio',
    stage: 'Main stage'
  },
  {
    day: 'SATURDAY',
    time: '10:30',
    artist: 'Fireside Jam',
    stage: 'Fireside'
  }
];

/* harmony default export */ __webpack_exports__["default"] = (schedule);


/***/ }),

/***/ "./src/assets/img/background.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/background.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "03358f782993a5f697b26444eb25bd78.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Utils */ "./src/services/Utils.js");
/* harmony import */ var _Users_johnpfannkuchen_Documents_Development_crowfest2020_src_assets_img_background_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/assets/img/background.jpg */ "./src/assets/img/background.jpg");
/* harmony import */ var _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/Home.js */ "./src/views/pages/Home.js");
/* harmony import */ var _views_pages_About_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/About.js */ "./src/views/pages/About.js");
/* harmony import */ var _views_pages_Tickets_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/Tickets.js */ "./src/views/pages/Tickets.js");
/* harmony import */ var _views_pages_Camping_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/pages/Camping.js */ "./src/views/pages/Camping.js");
/* harmony import */ var _views_pages_Location_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/pages/Location.js */ "./src/views/pages/Location.js");
/* harmony import */ var _views_pages_Artists_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/pages/Artists.js */ "./src/views/pages/Artists.js");












//List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/about': _views_pages_About_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/tickets': _views_pages_Tickets_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  '/camping': _views_pages_Camping_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  '/location': _views_pages_Location_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  '/artists': _views_pages_Artists_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};

//The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  // Lazy load view elements:
  const content = document.getElementById('content');

  //Get the parsed URL from the address bar
  let request = _services_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseRequestURL();

  //Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? '/' + request.verb : '');

  //Get the page from our hash of supported routes.
  // If the parsed url is not in our list of supported routes, select the 404 page instead

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  //await page.after_render();
};

//Listen on hash change:
window.addEventListener('hashchange', router);

//Listen on page load:
window.addEventListener('load', router);


/***/ }),

/***/ "./src/services/Utils.js":
/*!*******************************!*\
  !*** ./src/services/Utils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Utils = {
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');
    let request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];
    return request;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/views/pages/About.js":
/*!**********************************!*\
  !*** ./src/views/pages/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let About = {
  render: async () => {
    let markup = `
        
        <section class="content-left">
          <h1>What's it all about?</h1>
          <p>ALL proceeds from the CrowFest will be donated to the Southern Tier Veterans Support Group to assist veterans. </p>
          <p>This year’s festival features one of our favorite lineups.  There will be non-stop music with two stages to keep the music going! </p>
        </section>
        
        <secton class="content-right">
          <p>Don't forget the motorcycles.  Talk to your local motorcycle clubs and get them involved or jump on your bike and take a ride through the beautiful Southern Tier ending with a day of music and food and fire! </p>
          <p>Help us celebrate the Summer Solstice!  We will be having a bonfire each night.  Bring something to burn!  Bring an instrument and join in on the pickin' around the fire!</p>
        </section>
        
        `;
    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ }),

/***/ "./src/views/pages/Artists.js":
/*!************************************!*\
  !*** ./src/views/pages/Artists.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/data/schedule */ "./src/assets/data/schedule.js");


let day = 'FRIDAY';
let Artists = {
  render: () => {
    let markup = `
    <div class = "row">
    <div class="col-1-of-2">
    <h1>${day}</h1>`;
    _assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((cur, i, arr) => {
      if (_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].day == day) {
        markup += `
      <div class="schedule">
      <h2>${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].artist}</h2>
      <h3>${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].time}pm [${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].day}]</h3>
      <h6>Performing at the ${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].stage}</h6>
      </div>
      `;
      }
    });
    markup += `</div>`;

    ////////////////////////////////////

    day = 'SATURDAY';
    markup += `
    <div class = "row">
    <div class="col-1-of-2">
    <h1>${day}</h1>`;
    _assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((cur, i, arr) => {
      if (_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].day == day) {
        markup += `
      <div class="schedule">
        <h2>${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].artist}</h2>
        <h3>${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].time}pm [${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].day}]</h3>
        <h6>Performing at the ${_assets_data_schedule__WEBPACK_IMPORTED_MODULE_0__["default"][i].stage}</h6>
      </div>
      `;
      }
    });
    markup += `</div></div>`;
    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Artists);


/***/ }),

/***/ "./src/views/pages/Camping.js":
/*!************************************!*\
  !*** ./src/views/pages/Camping.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Camping = {
  render: () => {
    const markup = `
    
    <section class="content-left">
    <i class="material-icons">explore</i>
    </section>

    <section class="content">
      <p>
        <ul>
        <li><p>Pitch a tent or park a camper.</p></li>
        <li><p>First come first serve.</p></li>
        <li><p>No cost.</p></li>
        <li><p>Bathrooms available.</p></li>
        <li><p>NO showers.</p></li>
        <li><p>Take out what you bring in.</p></li>
        </ul>
      </p>
    </section>

    `;

    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Camping);


/***/ }),

/***/ "./src/views/pages/Home.js":
/*!*********************************!*\
  !*** ./src/views/pages/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Home = {
  render: () => {
    const markup = `
    <header class="header">
      
        <h1 id="header__title">Crowfest 2020</h1>
      
    </header>
      <header class="header">
          <a href="tickets.html"><button class="btn btn--color-white btn--center">Tickets</button></a>
      </header>
    
    `;
    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ "./src/views/pages/Location.js":
/*!*************************************!*\
  !*** ./src/views/pages/Location.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Location = {
  render: () => {
    const markup = `
    <div class="row">

      
      <section class="col-1-of-2">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex leo, vehicula vitae dictum quis, scelerisque ut tellus. Cras bibendum luctus orci quis mattis. Vivamus lobortis rhoncus ex in tincidunt. In justo nisl, mollis sed risus quis, elementum porttitor lacus. In varius, tellus eget posuere gravida, orci dolor consequat metus, at interdum quam lectus eu justo. Sed elementum pretium libero et malesuada. Cras feugiat egestas lacus, vitae tempus arcu ornare ut. Sed in felis vitae turpis faucibus rhoncus. Proin varius diam nulla, sit amet malesuada ipsum egestas quis. Sed et nunc quis urna vulputate faucibus. Proin ac lobortis elit. Pellentesque rutrum ullamcorper justo in pretium. Donec vitae nulla ac dolor feugiat blandit eu a ligula. 
          </p>
        </section>
      </div>

      <section class="col-1-of-2">      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47361.694670765355!2d-75.96873985192474!3d42.10520235632155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89da96531812450f%3A0x505b9e99ebaa9518!2sNY-17C%2C%20New%20York!5e0!3m2!1sen!2sus!4v1582499841660!5m2!1sen!2sus" 
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        ></iframe>
      </section>
      `;
    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Location);


/***/ }),

/***/ "./src/views/pages/Tickets.js":
/*!************************************!*\
  !*** ./src/views/pages/Tickets.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Tickets = {
  render: () => {
    const markup = `
    
    <div id="eventbrite-widget-container-92799043437"></div>

    <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

    <script type="text/javascript">
      var exampleCallback = function() {
        console.log('Order complete!');
      };

      window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '92799043437',
        iframeContainerId: 'eventbrite-widget-container-92799043437',

        // Optional
        iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback // Method called when an order has successfully completed
      });
    </script>
    
    `;
    return markup;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Tickets);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS9zY2hlZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wYWdlcy9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvQXJ0aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvQ2FtcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcGFnZXMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BhZ2VzL1RpY2tldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdJeEI7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCOztBQUVRO0FBQzREOztBQUV4RDtBQUNFO0FBQ0k7QUFDQTtBQUNFO0FBQ0Y7O0FBRS9DO0FBQ0E7QUFDQSxPQUFPLDREQUFJO0FBQ1gsWUFBWSw2REFBSztBQUNqQixjQUFjLCtEQUFPO0FBQ3JCLGNBQWMsK0RBQU87QUFDckIsZUFBZSxnRUFBUTtBQUN2QixjQUFjLCtEQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVEQUFLOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7O0FDZnJCLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsZ05BQXFHOztBQUV2STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BCckI7QUFBQTtBQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2QsSUFBSSw2REFBUTtBQUNaLFVBQVUsNkRBQVE7QUFDbEI7QUFDQTtBQUNBLFlBQVksNkRBQVEsV0FBVztBQUMvQixZQUFZLDZEQUFRLFNBQVMsTUFBTSw2REFBUSxRQUFRO0FBQ25ELDhCQUE4Qiw2REFBUSxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkLElBQUksNkRBQVE7QUFDWixVQUFVLDZEQUFRO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjLDZEQUFRLFdBQVc7QUFDakMsY0FBYyw2REFBUSxTQUFTLE1BQU0sNkRBQVEsUUFBUTtBQUNyRCxnQ0FBZ0MsNkRBQVEsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQzdDdkI7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQzNCdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakJwQjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6QnhCO0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxucCB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIG1heC13aWR0aDogMzhyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0LWp1c3RpZnk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oNiB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgKi9cXG51bFtjbGFzc10sXFxub2xbY2xhc3NdIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG51bFtjbGFzc10sXFxub2xbY2xhc3NdLFxcbmxpLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTmF0dXJhbCBmbG93IGFuZCByaHl0aG0gaW4gYXJ0aWNsZXMgYnkgZGVmYXVsdCAqL1xcbi8qXFxuYXJ0aWNsZSA+ICogKyAqIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuKi9cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKiB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4uY29udGVudCB7XFxuICBhbmltYXRpb246IHRyYW5zaXRpb25JbiAxLjc1cywgc2xpZGVJbiAwLjc1cztcXG59XFxuXFxuLnNjaGVkdWxlIHtcXG4gIGFuaW1hdGlvbjogdHJhbnNpdGlvbkluIDEuNzVzLCBzbGlkZUluIDEuNzVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRyYW5zaXRpb25JbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZUluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHJlbSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuLmJ0bi0tY29sb3Itd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGNvbG9yOiAjZWVlO1xcbn1cXG4uYnRuLS1jZW50ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uaGVhZGVyX19sb2dvIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLmhlYWRlcl9fbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjU2NGQ7XFxufVxcbi5oZWFkZXJfX25hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwIDElO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYjU2NGQ7XFxufVxcbi5mb290ZXJfX3VsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnJvdyB7XFxuICBtYXgtd2lkdGg6IDExNHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGNvbG9yOiAjZWVlO1xcbn1cXG4ucm93Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXG59XFxuLnJvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ucm93IFtjbGFzc149Y29sLV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiNTY0ZDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ucm93IFtjbGFzc149Y29sLV06bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcbi5yb3cgLmNvbC0xLW9mLTIge1xcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzcmVtKSAvIDIpO1xcbn1cXG4ucm93IC5jb2wtMS1vZi0zIHtcXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDIgKiAzcmVtKSkgLyAzKTtcXG59XFxuLnJvdyAuY29sLTItb2YtMyB7XFxuICB3aWR0aDogY2FsYyggMiAqICgoMTAwJSAtICgyICogM3JlbSkpIC8gMykgKyAzcmVtICk7XFxufVxcbi5yb3cgLmNvbC0xLW9mLTQge1xcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMyAqIDNyZW0pKSAvIDQpO1xcbn1cXG4ucm93IC5jb2wtMi1vZi00IHtcXG4gIHdpZHRoOiBjYWxjKCAoMiAqICgxMDAlIC0gKDMgKiAzcmVtKSkgLyA0KSArIDNyZW0gKTtcXG59XFxuLnJvdyAuY29sLTMtb2YtNCB7XFxuICB3aWR0aDogY2FsYyggKDMgKiAoMTAwJSAtICgzICogM3JlbSkpIC8gNCkgKyAyICogM3JlbSApO1xcbn1cXG5cXG5pZnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogOTV2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvVXNlcnMvam9obnBmYW5ua3VjaGVuL0RvY3VtZW50cy9EZXZlbG9wbWVudC9jcm93ZmVzdDIwMjAvZGlzdC9pbWcvYXJ0aXN0cy9nbGVubWFyeXNfZ2hvc3QuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTByZW0pIHtcXG4gICNjb250ZW50IHtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjb250ZW50LWxlZnQgY29udGVudC1yaWdodFxcXCI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3Qgc2NoZWR1bGUgPSBbXG4gIHtcbiAgICBkYXk6ICdGUklEQVknLFxuICAgIHRpbWU6ICc1OjMwLTY6MDAnLFxuICAgIGFydGlzdDogJ0tldmluIERvdXBlJyxcbiAgICBzdGFnZTogJ1NpZGUgU3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdGUklEQVknLFxuICAgIHRpbWU6ICc2OjAwLTc6MDAnLFxuICAgIGFydGlzdDogJ1VuY2xlIFVrdSBhbmQgVGhlIEd1aXNlJyxcbiAgICBzdGFnZTogJ01haW4gU3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdGUklEQVknLFxuICAgIHRpbWU6ICc3OjAwLTc6MzAnLFxuICAgIGFydGlzdDogJ1RpbSBSdWZmbyBbd2l0aCBzcGVjaWFsIGd1ZXN0IE1pY2hhZWxhIENsYXJrXScsXG4gICAgc3RhZ2U6ICdTaWRlIFN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnRlJJREFZJyxcbiAgICB0aW1lOiAnNzozMC04OjMwJyxcbiAgICBhcnRpc3Q6IFwiVGhlIFNtb2tpbicgQ3Jvd3NcIixcbiAgICBzdGFnZTogJ01haW4gU3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdGUklEQVknLFxuICAgIHRpbWU6ICc4OjMwLTk6MDAnLFxuICAgIGFydGlzdDogJ01hcnR5ICcsXG4gICAgc3RhZ2U6ICdTaWRlIFN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnRlJJREFZJyxcbiAgICB0aW1lOiAnOTowMC0xMDozMCcsXG4gICAgYXJ0aXN0OiBcIkVhZ2xlJ3MgVHJpYnV0ZVwiLFxuICAgIHN0YWdlOiAnTWFpbiBTdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ0ZSSURBWScsXG4gICAgdGltZTogJzEwOjMwJyxcbiAgICBhcnRpc3Q6ICdGaXJlc2lkZSBKYW0nLFxuICAgIHN0YWdlOiAnRmlyZXNpZGUnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzEyOjAwLTE6MDAnLFxuICAgIGFydGlzdDogXCJHbGVubWFyeSdzIEdob3N0XCIsXG4gICAgc3RhZ2U6ICdNYWluIHN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnU0FUVVJEQVknLFxuICAgIHRpbWU6ICcxOjAwLTE6MTUnLFxuICAgIGFydGlzdDogJ0dlb3JnZSBHbGVhc29uJyxcbiAgICBzdGFnZTogJ1NpZGUgc3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzE6MTUtMjoxNScsXG4gICAgYXJ0aXN0OiAnTmV4dCB0byBLaW4nLFxuICAgIHN0YWdlOiAnTWFpbiBzdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ1NBVFVSREFZJyxcbiAgICB0aW1lOiAnMjoxNS0yOjMwJyxcbiAgICBhcnRpc3Q6ICdOaWNrIFJ1ZmZvJyxcbiAgICBzdGFnZTogJ1NpZGUgc3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzI6MzAtMzozMCcsXG4gICAgYXJ0aXN0OiAnQSBQYXJ0IG9mIFBsdXRvJyxcbiAgICBzdGFnZTogJ01haW4gc3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzM6MzAtMzo0NScsXG4gICAgYXJ0aXN0OiAnQ2hyaXMgUnVmZm8nLFxuICAgIHN0YWdlOiAnU2lkZSBzdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ1NBVFVSREFZJyxcbiAgICB0aW1lOiAnMzo0NS00OjQ1JyxcbiAgICBhcnRpc3Q6ICdKIEZsb3lkICYgVGhlIEdyYXZlIFNpdHRlcnMnLFxuICAgIHN0YWdlOiAnTWFpbiBzdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ1NBVFVSREFZJyxcbiAgICB0aW1lOiAnNDo0NS01OjAwJyxcbiAgICBhcnRpc3Q6ICdHZW5lIEh1bW1lbCcsXG4gICAgc3RhZ2U6ICdTaWRlIHN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnU0FUVVJEQVknLFxuICAgIHRpbWU6ICc1OjAwLTY6MDAnLFxuICAgIGFydGlzdDogJ01pa2UgRGF2aXMgYW5kIExCRScsXG4gICAgc3RhZ2U6ICdNYWluIHN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnU0FUVVJEQVknLFxuICAgIHRpbWU6ICc2OjAwLTY6MTUnLFxuICAgIGFydGlzdDogJ1RpbSBSdWZmbycsXG4gICAgc3RhZ2U6ICdTaWRlIHN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnU0FUVVJEQVknLFxuICAgIHRpbWU6ICc2OjE1LTc6MTUnLFxuICAgIGFydGlzdDogJ1dvb2RzaGVkIFByb3BoZXRzJyxcbiAgICBzdGFnZTogJ01haW4gc3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzc6MTUtNzo0NScsXG4gICAgYXJ0aXN0OiAnVW5kZXIgdGhlIFJ1ZycsXG4gICAgc3RhZ2U6ICdTaWRlIHN0YWdlJ1xuICB9LFxuICB7XG4gICAgZGF5OiAnU0FUVVJEQVknLFxuICAgIHRpbWU6ICc3OjQ1LTg6NDUnLFxuICAgIGFydGlzdDogJ1RpanVhbmEgRGFuZ2VyIERvZ3MnLFxuICAgIHN0YWdlOiAnTWFpbiBzdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ1NBVFVSREFZJyxcbiAgICB0aW1lOiAnODo0NS05OjE1JyxcbiAgICBhcnRpc3Q6ICdCb290a25pZmUnLFxuICAgIHN0YWdlOiAnU2lkZSBzdGFnZSdcbiAgfSxcbiAge1xuICAgIGRheTogJ1NBVFVSREFZJyxcbiAgICB0aW1lOiAnOToxNS0xMDozMCcsXG4gICAgYXJ0aXN0OiAnUmFuZHkgTWNTdGluZSBUcmlvJyxcbiAgICBzdGFnZTogJ01haW4gc3RhZ2UnXG4gIH0sXG4gIHtcbiAgICBkYXk6ICdTQVRVUkRBWScsXG4gICAgdGltZTogJzEwOjMwJyxcbiAgICBhcnRpc3Q6ICdGaXJlc2lkZSBKYW0nLFxuICAgIHN0YWdlOiAnRmlyZXNpZGUnXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzMzU4Zjc4Mjk5M2E1ZjY5N2IyNjQ0NGViMjViZDc4LmpwZ1wiOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBVdGlscyBmcm9tICcuL3NlcnZpY2VzL1V0aWxzJztcbmltcG9ydCAnL1VzZXJzL2pvaG5wZmFubmt1Y2hlbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvY3Jvd2Zlc3QyMDIwL3NyYy9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9wYWdlcy9Ib21lLmpzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL3ZpZXdzL3BhZ2VzL0Fib3V0LmpzJztcbmltcG9ydCBUaWNrZXRzIGZyb20gJy4vdmlld3MvcGFnZXMvVGlja2V0cy5qcyc7XG5pbXBvcnQgQ2FtcGluZyBmcm9tICcuL3ZpZXdzL3BhZ2VzL0NhbXBpbmcuanMnO1xuaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vdmlld3MvcGFnZXMvTG9jYXRpb24uanMnO1xuaW1wb3J0IEFydGlzdHMgZnJvbSAnLi92aWV3cy9wYWdlcy9BcnRpc3RzLmpzJztcblxuLy9MaXN0IG9mIHN1cHBvcnRlZCByb3V0ZXMuIEFueSB1cmwgb3RoZXIgdGhhbiB0aGVzZSByb3V0ZXMgd2lsbCB0aHJvdyBhIDQwNCBlcnJvclxuY29uc3Qgcm91dGVzID0ge1xuICAnLyc6IEhvbWUsXG4gICcvYWJvdXQnOiBBYm91dCxcbiAgJy90aWNrZXRzJzogVGlja2V0cyxcbiAgJy9jYW1waW5nJzogQ2FtcGluZyxcbiAgJy9sb2NhdGlvbic6IExvY2F0aW9uLFxuICAnL2FydGlzdHMnOiBBcnRpc3RzXG59O1xuXG4vL1RoZSByb3V0ZXIgY29kZS4gVGFrZXMgYSBVUkwsIGNoZWNrcyBhZ2FpbnN0IHRoZSBsaXN0IG9mIHN1cHBvcnRlZCByb3V0ZXMgYW5kIHRoZW4gcmVuZGVycyB0aGUgY29ycmVzcG9uZGluZyBjb250ZW50IHBhZ2UuXG5jb25zdCByb3V0ZXIgPSBhc3luYyAoKSA9PiB7XG4gIC8vIExhenkgbG9hZCB2aWV3IGVsZW1lbnRzOlxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAvL0dldCB0aGUgcGFyc2VkIFVSTCBmcm9tIHRoZSBhZGRyZXNzIGJhclxuICBsZXQgcmVxdWVzdCA9IFV0aWxzLnBhcnNlUmVxdWVzdFVSTCgpO1xuXG4gIC8vUGFyc2UgdGhlIFVSTCBhbmQgaWYgaXQgaGFzIGFuIGlkIHBhcnQsIGNoYW5nZSBpdCB3aXRoIHRoZSBzdHJpbmcgXCI6aWRcIlxuICBsZXQgcGFyc2VkVVJMID1cbiAgICAocmVxdWVzdC5yZXNvdXJjZSA/ICcvJyArIHJlcXVlc3QucmVzb3VyY2UgOiAnLycpICtcbiAgICAocmVxdWVzdC5pZCA/ICcvOmlkJyA6ICcnKSArXG4gICAgKHJlcXVlc3QudmVyYiA/ICcvJyArIHJlcXVlc3QudmVyYiA6ICcnKTtcblxuICAvL0dldCB0aGUgcGFnZSBmcm9tIG91ciBoYXNoIG9mIHN1cHBvcnRlZCByb3V0ZXMuXG4gIC8vIElmIHRoZSBwYXJzZWQgdXJsIGlzIG5vdCBpbiBvdXIgbGlzdCBvZiBzdXBwb3J0ZWQgcm91dGVzLCBzZWxlY3QgdGhlIDQwNCBwYWdlIGluc3RlYWRcblxuICBsZXQgcGFnZSA9IHJvdXRlc1twYXJzZWRVUkxdID8gcm91dGVzW3BhcnNlZFVSTF0gOiBFcnJvcjQwNDtcbiAgY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuICAvL2F3YWl0IHBhZ2UuYWZ0ZXJfcmVuZGVyKCk7XG59O1xuXG4vL0xpc3RlbiBvbiBoYXNoIGNoYW5nZTpcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgcm91dGVyKTtcblxuLy9MaXN0ZW4gb24gcGFnZSBsb2FkOlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByb3V0ZXIpO1xuIiwiY29uc3QgVXRpbHMgPSB7XG4gIHBhcnNlUmVxdWVzdFVSTDogKCkgPT4ge1xuICAgIGxldCB1cmwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkgfHwgJy8nO1xuICAgIGxldCByID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICByZXNvdXJjZTogbnVsbCxcbiAgICAgIGlkOiBudWxsLFxuICAgICAgdmVyYjogbnVsbFxuICAgIH07XG4gICAgcmVxdWVzdC5yZXNvdXJjZSA9IHJbMV07XG4gICAgcmVxdWVzdC5pZCA9IHJbMl07XG4gICAgcmVxdWVzdC52ZXJiID0gclszXTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImxldCBBYm91dCA9IHtcbiAgcmVuZGVyOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IG1hcmt1cCA9IGBcbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1sZWZ0XCI+XG4gICAgICAgICAgPGgxPldoYXQncyBpdCBhbGwgYWJvdXQ/PC9oMT5cbiAgICAgICAgICA8cD5BTEwgcHJvY2VlZHMgZnJvbSB0aGUgQ3Jvd0Zlc3Qgd2lsbCBiZSBkb25hdGVkIHRvIHRoZSBTb3V0aGVybiBUaWVyIFZldGVyYW5zIFN1cHBvcnQgR3JvdXAgdG8gYXNzaXN0IHZldGVyYW5zLiA8L3A+XG4gICAgICAgICAgPHA+VGhpcyB5ZWFy4oCZcyBmZXN0aXZhbCBmZWF0dXJlcyBvbmUgb2Ygb3VyIGZhdm9yaXRlIGxpbmV1cHMuICBUaGVyZSB3aWxsIGJlIG5vbi1zdG9wIG11c2ljIHdpdGggdHdvIHN0YWdlcyB0byBrZWVwIHRoZSBtdXNpYyBnb2luZyEgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdG9uIGNsYXNzPVwiY29udGVudC1yaWdodFwiPlxuICAgICAgICAgIDxwPkRvbid0IGZvcmdldCB0aGUgbW90b3JjeWNsZXMuICBUYWxrIHRvIHlvdXIgbG9jYWwgbW90b3JjeWNsZSBjbHVicyBhbmQgZ2V0IHRoZW0gaW52b2x2ZWQgb3IganVtcCBvbiB5b3VyIGJpa2UgYW5kIHRha2UgYSByaWRlIHRocm91Z2ggdGhlIGJlYXV0aWZ1bCBTb3V0aGVybiBUaWVyIGVuZGluZyB3aXRoIGEgZGF5IG9mIG11c2ljIGFuZCBmb29kIGFuZCBmaXJlISA8L3A+XG4gICAgICAgICAgPHA+SGVscCB1cyBjZWxlYnJhdGUgdGhlIFN1bW1lciBTb2xzdGljZSEgIFdlIHdpbGwgYmUgaGF2aW5nIGEgYm9uZmlyZSBlYWNoIG5pZ2h0LiAgQnJpbmcgc29tZXRoaW5nIHRvIGJ1cm4hICBCcmluZyBhbiBpbnN0cnVtZW50IGFuZCBqb2luIGluIG9uIHRoZSBwaWNraW4nIGFyb3VuZCB0aGUgZmlyZSE8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIGA7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvc2NoZWR1bGUnO1xuXG5sZXQgZGF5ID0gJ0ZSSURBWSc7XG5sZXQgQXJ0aXN0cyA9IHtcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgbGV0IG1hcmt1cCA9IGBcbiAgICA8ZGl2IGNsYXNzID0gXCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEtb2YtMlwiPlxuICAgIDxoMT4ke2RheX08L2gxPmA7XG4gICAgc2NoZWR1bGUuZm9yRWFjaCgoY3VyLCBpLCBhcnIpID0+IHtcbiAgICAgIGlmIChzY2hlZHVsZVtpXS5kYXkgPT0gZGF5KSB7XG4gICAgICAgIG1hcmt1cCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwic2NoZWR1bGVcIj5cbiAgICAgIDxoMj4ke3NjaGVkdWxlW2ldLmFydGlzdH08L2gyPlxuICAgICAgPGgzPiR7c2NoZWR1bGVbaV0udGltZX1wbSBbJHtzY2hlZHVsZVtpXS5kYXl9XTwvaDM+XG4gICAgICA8aDY+UGVyZm9ybWluZyBhdCB0aGUgJHtzY2hlZHVsZVtpXS5zdGFnZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1hcmt1cCArPSBgPC9kaXY+YDtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZGF5ID0gJ1NBVFVSREFZJztcbiAgICBtYXJrdXAgKz0gYFxuICAgIDxkaXYgY2xhc3MgPSBcInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMS1vZi0yXCI+XG4gICAgPGgxPiR7ZGF5fTwvaDE+YDtcbiAgICBzY2hlZHVsZS5mb3JFYWNoKChjdXIsIGksIGFycikgPT4ge1xuICAgICAgaWYgKHNjaGVkdWxlW2ldLmRheSA9PSBkYXkpIHtcbiAgICAgICAgbWFya3VwICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzY2hlZHVsZVwiPlxuICAgICAgICA8aDI+JHtzY2hlZHVsZVtpXS5hcnRpc3R9PC9oMj5cbiAgICAgICAgPGgzPiR7c2NoZWR1bGVbaV0udGltZX1wbSBbJHtzY2hlZHVsZVtpXS5kYXl9XTwvaDM+XG4gICAgICAgIDxoNj5QZXJmb3JtaW5nIGF0IHRoZSAke3NjaGVkdWxlW2ldLnN0YWdlfTwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFya3VwICs9IGA8L2Rpdj48L2Rpdj5gO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdHM7XG4iLCJsZXQgQ2FtcGluZyA9IHtcbiAgcmVuZGVyOiAoKSA9PiB7XG4gICAgY29uc3QgbWFya3VwID0gYFxuICAgIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1sZWZ0XCI+XG4gICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGxvcmU8L2k+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8cD5cbiAgICAgICAgPHVsPlxuICAgICAgICA8bGk+PHA+UGl0Y2ggYSB0ZW50IG9yIHBhcmsgYSBjYW1wZXIuPC9wPjwvbGk+XG4gICAgICAgIDxsaT48cD5GaXJzdCBjb21lIGZpcnN0IHNlcnZlLjwvcD48L2xpPlxuICAgICAgICA8bGk+PHA+Tm8gY29zdC48L3A+PC9saT5cbiAgICAgICAgPGxpPjxwPkJhdGhyb29tcyBhdmFpbGFibGUuPC9wPjwvbGk+XG4gICAgICAgIDxsaT48cD5OTyBzaG93ZXJzLjwvcD48L2xpPlxuICAgICAgICA8bGk+PHA+VGFrZSBvdXQgd2hhdCB5b3UgYnJpbmcgaW4uPC9wPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgYDtcblxuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBpbmc7XG4iLCJjb25zdCBIb21lID0ge1xuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgXG4gICAgICAgIDxoMSBpZD1cImhlYWRlcl9fdGl0bGVcIj5Dcm93ZmVzdCAyMDIwPC9oMT5cbiAgICAgIFxuICAgIDwvaGVhZGVyPlxuICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJ0aWNrZXRzLmh0bWxcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0tY29sb3Itd2hpdGUgYnRuLS1jZW50ZXJcIj5UaWNrZXRzPC9idXR0b24+PC9hPlxuICAgICAgPC9oZWFkZXI+XG4gICAgXG4gICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwibGV0IExvY2F0aW9uID0ge1xuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4gICAgICBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLTEtb2YtMlwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgZXggbGVvLCB2ZWhpY3VsYSB2aXRhZSBkaWN0dW0gcXVpcywgc2NlbGVyaXNxdWUgdXQgdGVsbHVzLiBDcmFzIGJpYmVuZHVtIGx1Y3R1cyBvcmNpIHF1aXMgbWF0dGlzLiBWaXZhbXVzIGxvYm9ydGlzIHJob25jdXMgZXggaW4gdGluY2lkdW50LiBJbiBqdXN0byBuaXNsLCBtb2xsaXMgc2VkIHJpc3VzIHF1aXMsIGVsZW1lbnR1bSBwb3J0dGl0b3IgbGFjdXMuIEluIHZhcml1cywgdGVsbHVzIGVnZXQgcG9zdWVyZSBncmF2aWRhLCBvcmNpIGRvbG9yIGNvbnNlcXVhdCBtZXR1cywgYXQgaW50ZXJkdW0gcXVhbSBsZWN0dXMgZXUganVzdG8uIFNlZCBlbGVtZW50dW0gcHJldGl1bSBsaWJlcm8gZXQgbWFsZXN1YWRhLiBDcmFzIGZldWdpYXQgZWdlc3RhcyBsYWN1cywgdml0YWUgdGVtcHVzIGFyY3Ugb3JuYXJlIHV0LiBTZWQgaW4gZmVsaXMgdml0YWUgdHVycGlzIGZhdWNpYnVzIHJob25jdXMuIFByb2luIHZhcml1cyBkaWFtIG51bGxhLCBzaXQgYW1ldCBtYWxlc3VhZGEgaXBzdW0gZWdlc3RhcyBxdWlzLiBTZWQgZXQgbnVuYyBxdWlzIHVybmEgdnVscHV0YXRlIGZhdWNpYnVzLiBQcm9pbiBhYyBsb2JvcnRpcyBlbGl0LiBQZWxsZW50ZXNxdWUgcnV0cnVtIHVsbGFtY29ycGVyIGp1c3RvIGluIHByZXRpdW0uIERvbmVjIHZpdGFlIG51bGxhIGFjIGRvbG9yIGZldWdpYXQgYmxhbmRpdCBldSBhIGxpZ3VsYS4gXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtMS1vZi0yXCI+ICAgICAgXG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDczNjEuNjk0NjcwNzY1MzU1ITJkLTc1Ljk2ODczOTg1MTkyNDc0ITNkNDIuMTA1MjAyMzU2MzIxNTUhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5ZGE5NjUzMTgxMjQ1MGYlM0EweDUwNWI5ZTk5ZWJhYTk1MTghMnNOWS0xN0MlMkMlMjBOZXclMjBZb3JrITVlMCEzbTIhMXNlbiEyc3VzITR2MTU4MjQ5OTg0MTY2MCE1bTIhMXNlbiEyc3VzXCIgXG4gICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgIHN0eWxlPVwiYm9yZGVyOjA7XCJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbjtcbiIsImxldCBUaWNrZXRzID0ge1xuICByZW5kZXI6ICgpID0+IHtcbiAgICBjb25zdCBtYXJrdXAgPSBgXG4gICAgXG4gICAgPGRpdiBpZD1cImV2ZW50YnJpdGUtd2lkZ2V0LWNvbnRhaW5lci05Mjc5OTA0MzQzN1wiPjwvZGl2PlxuXG4gICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5ldmVudGJyaXRlLmNvbS9zdGF0aWMvd2lkZ2V0cy9lYl93aWRnZXRzLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbiAgICAgIHZhciBleGFtcGxlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ09yZGVyIGNvbXBsZXRlIScpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LkVCV2lkZ2V0cy5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAvLyBSZXF1aXJlZFxuICAgICAgICB3aWRnZXRUeXBlOiAnY2hlY2tvdXQnLFxuICAgICAgICBldmVudElkOiAnOTI3OTkwNDM0MzcnLFxuICAgICAgICBpZnJhbWVDb250YWluZXJJZDogJ2V2ZW50YnJpdGUtd2lkZ2V0LWNvbnRhaW5lci05Mjc5OTA0MzQzNycsXG5cbiAgICAgICAgLy8gT3B0aW9uYWxcbiAgICAgICAgaWZyYW1lQ29udGFpbmVySGVpZ2h0OiA0MjUsIC8vIFdpZGdldCBoZWlnaHQgaW4gcGl4ZWxzLiBEZWZhdWx0cyB0byBhIG1pbmltdW0gb2YgNDI1cHggaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIG9uT3JkZXJDb21wbGV0ZTogZXhhbXBsZUNhbGxiYWNrIC8vIE1ldGhvZCBjYWxsZWQgd2hlbiBhbiBvcmRlciBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFxuICAgICAgfSk7XG4gICAgPC9zY3JpcHQ+XG4gICAgXG4gICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==