(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["loadingModal"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  /*font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;*/
}

#forecast > div {
  width: 16rem;
}

.container {
  max-width: 1200px;
}

.forecast-day img {
  width: 40%;
  margin-bottom: -12px;
}

.forecast-day h3 {
  font-weight: 700;
  font-size: 108%;
  color: wheat;
}

@media only screen and (max-width: 560px) {
  #forecast {
    gap: 1rem;
  }

  .space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: none;
  }

  .search-bar {
    width: 8rem;
  }

  .input input {
    width: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE;+CAC6C;;EAE7C;;;4BAG0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["html {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    \"Liberation Mono\", \"Courier New\", monospace;\n\n  /*font-family: \"Montserrat\", sans-serif;\n        font-optical-sizing: auto;\n        font-weight: <weight>;\n        font-style: normal;*/\n}\n\n#forecast > div {\n  width: 16rem;\n}\n\n.container {\n  max-width: 1200px;\n}\n\n.forecast-day img {\n  width: 40%;\n  margin-bottom: -12px;\n}\n\n.forecast-day h3 {\n  font-weight: 700;\n  font-size: 108%;\n  color: wheat;\n}\n\n@media only screen and (max-width: 560px) {\n  #forecast {\n    gap: 1rem;\n  }\n\n  .space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: none;\n  }\n\n  .search-bar {\n    width: 8rem;\n  }\n\n  .input input {\n    width: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAPI: () => (/* binding */ handleAPI),
/* harmony export */   searchField: () => (/* binding */ searchField)
/* harmony export */ });
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _distributeAPIData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributeAPIData */ "./src/distributeAPIData.js");
/* harmony import */ var _loadingModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingModal */ "./src/loadingModal.js");
/* harmony import */ var _tempToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tempToggle */ "./src/tempToggle.js");






const searchField = document.getElementById("searchField");

searchField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
   
    // Remove all elements with class "day-container"
    const forecastContainer = document.getElementById("forecast");
    while (forecastContainer.firstChild) {
      forecastContainer.removeChild(forecastContainer.firstChild);
    }

    handleAPI(searchField.value);
  }
});

async function handleAPI(searchFieldValue) {
  console.log("User entered:", searchFieldValue);
  (0,_loadingModal__WEBPACK_IMPORTED_MODULE_3__.initiateLoadModal)(true);
  let metric = (0,_tempToggle__WEBPACK_IMPORTED_MODULE_4__.toggleTemp)();
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchFieldValue}/next6days?unitGroup=${metric}&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Cconditions%2Cicon&key=NVX2UNEEQ2C2M6SWL7G732EED&contentType=json`,
    { mode: "cors" }
  );

  try {
    const data = await response.json();
    console.log(data);
    (0,_distributeAPIData__WEBPACK_IMPORTED_MODULE_2__.filterAPIData)(data);
  } catch (error) {
    console.error("Error fetching the weather data:", error);
  } finally {
    // Hide loading spinner
    (0,_loadingModal__WEBPACK_IMPORTED_MODULE_3__.initiateLoadModal)(false);
    
  }
}


/***/ }),

/***/ "./src/distributeAPIData.js":
/*!**********************************!*\
  !*** ./src/distributeAPIData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distributeAPIData: () => (/* binding */ distributeAPIData),
/* harmony export */   filterAPIData: () => (/* binding */ filterAPIData)
/* harmony export */ });
/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.js");
/* harmony import */ var _tempToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempToggle */ "./src/tempToggle.js");
/* harmony import */ var _getDayOfWeek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDayOfWeek */ "./src/getDayOfWeek.js");




class distributeAPIData {
  constructor(
    resolvedAddress,
    datetime,
    temp,
    tempmin,
    tempmax,
    conditions,
    icon
  ) {
    this.resolvedAddress = resolvedAddress || "Unknown Location";
    this.datetime = datetime || "Unknown Date";
    this.temp = temp !== undefined ? temp : "N/A";
    this.tempmin = tempmin !== undefined ? tempmin : "N/A";
    this.tempmax = tempmax !== undefined ? tempmax : "N/A";
    this.conditions = conditions || "N/A";
    this.icon = icon || "default-icon";
  }

  renderCurrentWeather(metricSymbol) {
    const iconPath = __webpack_require__("./src/icons sync recursive ^\\.\\/.*\\.png$")(`./${this.icon}.png`);
    const currentWeatherContainer = document.getElementById("current-weather");
    currentWeatherContainer.innerHTML = `
            <img class="-ml-4 -mt-4 -mb-2" src="${iconPath}" alt="${this.conditions}">
            <h2 class="text-2xl mb-2 font-bold">${this.resolvedAddress}</h2>
            <p class="text-xl temp mb-2 text-info font-semibold" data-original-temp="${this.temp}">${this.temp}${metricSymbol}</p>
            <p class="tempmin" data-original-temp="${this.tempmin}">${this.tempmin}${metricSymbol} <span class="text-gray-400">/</span> 
            <span class="tempmax mb-2" data-original-temp="${this.tempmax}">${this.tempmax}${metricSymbol}</span></p>
            <p>${this.conditions}</p>
        `;
  }

  renderForecast(dayContainer, metricSymbol) {
    const iconPath = __webpack_require__("./src/icons sync recursive ^\\.\\/.*\\.png$")(`./${this.icon}.png`);
    const dayOfWeek = (0,_getDayOfWeek__WEBPACK_IMPORTED_MODULE_2__.getDayOfWeek)(this.datetime);
    dayContainer.innerHTML = `
            <div class="forecast-day bg-neutral pb-4 min-h-52 rounded-lg text-center flex flex-col justify-center w-64">
                <center><img src="${iconPath}" alt="${this.conditions}"></center>
                <h3>${dayOfWeek}</h3>
                <p class="tempmin text-white" data-original-temp="${this.tempmin}">${this.tempmin}${metricSymbol} <span class="text-gray-400">/</span> 
                <span class="tempmax" data-original-temp="${this.tempmax}">${this.tempmax}${metricSymbol}</span></p>
                <p>${this.conditions}</p>
            </div>
        `;
  }
}

function filterAPIData(data) {
  try {
    if (data) {
      console.log("Data is being passed through:", data);

      let days = data.days;

      // Extract min/max temp from the first day in the forecast if not available in current conditions
      const todayForecast = days[0];
      const currentTempMin =
        data.currentConditions.tempmin !== undefined
          ? data.currentConditions.tempmin
          : todayForecast.tempmin;
      const currentTempMax =
        data.currentConditions.tempmax !== undefined
          ? data.currentConditions.tempmax
          : todayForecast.tempmax;

      // Get metric symbol based on the selected temperature unit
      const metricSymbol = (0,_tempToggle__WEBPACK_IMPORTED_MODULE_1__.replaceMetric)(document.getElementById("tempToggle"));

      // Render current weather
      const currentWeatherData = new distributeAPIData(
        data.resolvedAddress,
        data.currentConditions.datetime,
        data.currentConditions.temp,
        currentTempMin,
        currentTempMax,
        data.currentConditions.conditions,
        data.currentConditions.icon
      );
      currentWeatherData.renderCurrentWeather(metricSymbol);

      // Render 6-day forecast
      const forecastContainer = document.getElementById("forecast");
      days.slice(1, 7).forEach((day) => {
        const dayData = new distributeAPIData(
          data.resolvedAddress,
          day.datetime,
          day.temp,
          day.tempmin,
          day.tempmax,
          day.conditions,
          day.icon
        );

        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        dayContainer.classList.add("carousel-item");
        forecastContainer.appendChild(dayContainer);
        dayData.renderForecast(dayContainer, metricSymbol);
      });
    } else {
      console.log("Data is NOT being passed through");
    }
  } catch (error) {
    console.log("Data Parameter is NOT being received", error);
  }
}


/***/ }),

/***/ "./src/getDayOfWeek.js":
/*!*****************************!*\
  !*** ./src/getDayOfWeek.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDayOfWeek: () => (/* binding */ getDayOfWeek)
/* harmony export */ });
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const options = { weekday: "long" };
  return date.toLocaleDateString("en-US", options);
}


/***/ }),

/***/ "./src/icons sync recursive ^\\.\\/.*\\.png$":
/*!***************************************!*\
  !*** ./src/icons/ sync ^\.\/.*\.png$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.png": "./src/icons/clear-day.png",
	"./clear-night.png": "./src/icons/clear-night.png",
	"./cloudy.png": "./src/icons/cloudy.png",
	"./fog.png": "./src/icons/fog.png",
	"./hail.png": "./src/icons/hail.png",
	"./partly-cloudy-day.png": "./src/icons/partly-cloudy-day.png",
	"./partly-cloudy-night.png": "./src/icons/partly-cloudy-night.png",
	"./rain-snow-showers-day.png": "./src/icons/rain-snow-showers-day.png",
	"./rain-snow-showers-night.png": "./src/icons/rain-snow-showers-night.png",
	"./rain-snow.png": "./src/icons/rain-snow.png",
	"./rain.png": "./src/icons/rain.png",
	"./showers-day.png": "./src/icons/showers-day.png",
	"./showers-night.png": "./src/icons/showers-night.png",
	"./sleet.png": "./src/icons/sleet.png",
	"./snow-showers-day.png": "./src/icons/snow-showers-day.png",
	"./snow-showers-night.png": "./src/icons/snow-showers-night.png",
	"./snow.png": "./src/icons/snow.png",
	"./thunder-rain.png": "./src/icons/thunder-rain.png",
	"./thunder-showers-day.png": "./src/icons/thunder-showers-day.png",
	"./thunder-showers-night.png": "./src/icons/thunder-showers-night.png",
	"./thunder.png": "./src/icons/thunder.png",
	"./wind.png": "./src/icons/wind.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./src/loadingModal.js":
/*!*****************************!*\
  !*** ./src/loadingModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initiateLoadModal: () => (/* binding */ initiateLoadModal)
/* harmony export */ });
/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.js");


function initiateLoadModal(isLoading) {
  let initiateLoading = document.getElementById("initiateLoadModal");
  if (isLoading) {
    initiateLoading.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;
  } else if (_apiHandler__WEBPACK_IMPORTED_MODULE_0__.handleAPI && initiateLoadModal) {
    initiateLoading.innerHTML = ``;
  }
}


/***/ }),

/***/ "./src/tempToggle.js":
/*!***************************!*\
  !*** ./src/tempToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replaceMetric: () => (/* binding */ replaceMetric),
/* harmony export */   toggleTemp: () => (/* binding */ toggleTemp)
/* harmony export */ });
/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.js");


function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Use the debounce function to limit how often handleAPI is called
const debouncedHandleAPI = debounce(_apiHandler__WEBPACK_IMPORTED_MODULE_0__.handleAPI, 250);

function toggleTemp() {
    const dayContainer = document.querySelectorAll('.day-container');
    dayContainer.forEach((el) => {
        el.remove();
    });
    
    const tempToggle = document.getElementById("tempToggle");
    let metric = tempToggle.checked ? "us" : "metric";

    tempToggle.addEventListener("change", function () {
        metric = this.checked ? "us" : "metric";
        console.log(this.checked ? "Fahrenheit is selected." : "Celsius is selected.");

        const searchField = document.getElementById("searchField");
        debouncedHandleAPI(searchField.value);

        return metric;
    });

    return metric;
}


function replaceMetric(tempToggle) {
    let metricSymbol = tempToggle.checked ? "°F" : "°C";

    // Update metric symbols in the UI
    const tempElements = document.querySelectorAll(".metric-symbol");
    tempElements.forEach((el) => {
        el.textContent = metricSymbol;
    });

    return metricSymbol;
}


/***/ }),

/***/ "./src/icons/clear-day.png":
/*!*********************************!*\
  !*** ./src/icons/clear-day.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1af54a7de6967757748.png";

/***/ }),

/***/ "./src/icons/clear-night.png":
/*!***********************************!*\
  !*** ./src/icons/clear-night.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4fad58c6810d91bc7384.png";

/***/ }),

/***/ "./src/icons/cloudy.png":
/*!******************************!*\
  !*** ./src/icons/cloudy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a921e745794410c2d281.png";

/***/ }),

/***/ "./src/icons/fog.png":
/*!***************************!*\
  !*** ./src/icons/fog.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0c7d6ba1aad36cd573b.png";

/***/ }),

/***/ "./src/icons/hail.png":
/*!****************************!*\
  !*** ./src/icons/hail.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5e77beba39fb67a37b57.png";

/***/ }),

/***/ "./src/icons/partly-cloudy-day.png":
/*!*****************************************!*\
  !*** ./src/icons/partly-cloudy-day.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28f095d7c25369aec438.png";

/***/ }),

/***/ "./src/icons/partly-cloudy-night.png":
/*!*******************************************!*\
  !*** ./src/icons/partly-cloudy-night.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf989d6adac6d8f5a718.png";

/***/ }),

/***/ "./src/icons/rain-snow-showers-day.png":
/*!*********************************************!*\
  !*** ./src/icons/rain-snow-showers-day.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/rain-snow-showers-night.png":
/*!***********************************************!*\
  !*** ./src/icons/rain-snow-showers-night.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/rain-snow.png":
/*!*********************************!*\
  !*** ./src/icons/rain-snow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/rain.png":
/*!****************************!*\
  !*** ./src/icons/rain.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcc448eaac5fd4648c27.png";

/***/ }),

/***/ "./src/icons/showers-day.png":
/*!***********************************!*\
  !*** ./src/icons/showers-day.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcc448eaac5fd4648c27.png";

/***/ }),

/***/ "./src/icons/showers-night.png":
/*!*************************************!*\
  !*** ./src/icons/showers-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6659ab4de1c132e448dc.png";

/***/ }),

/***/ "./src/icons/sleet.png":
/*!*****************************!*\
  !*** ./src/icons/sleet.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/snow-showers-day.png":
/*!****************************************!*\
  !*** ./src/icons/snow-showers-day.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/snow-showers-night.png":
/*!******************************************!*\
  !*** ./src/icons/snow-showers-night.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/snow.png":
/*!****************************!*\
  !*** ./src/icons/snow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4db6cbca7fa219f2cf04.png";

/***/ }),

/***/ "./src/icons/thunder-rain.png":
/*!************************************!*\
  !*** ./src/icons/thunder-rain.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "331cf6886ed38d410fb4.png";

/***/ }),

/***/ "./src/icons/thunder-showers-day.png":
/*!*******************************************!*\
  !*** ./src/icons/thunder-showers-day.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "331cf6886ed38d410fb4.png";

/***/ }),

/***/ "./src/icons/thunder-showers-night.png":
/*!*********************************************!*\
  !*** ./src/icons/thunder-showers-night.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "331cf6886ed38d410fb4.png";

/***/ }),

/***/ "./src/icons/thunder.png":
/*!*******************************!*\
  !*** ./src/icons/thunder.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "331cf6886ed38d410fb4.png";

/***/ }),

/***/ "./src/icons/wind.png":
/*!****************************!*\
  !*** ./src/icons/wind.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0c7d6ba1aad36cd573b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/loadingModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDeUM7O0FBRWxDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSSxTQUFTLGtEQUFTO0FBQ3RCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxrREFBUzs7QUFFdEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXN0cmlidXRlQVBJRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXlPZldlZWsuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaWNvbnMvIHN5bmMgXlxcLlxcLy4qXFwucG5nJCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2FkaW5nTW9kYWwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVtcFRvZ2dsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcbiAgICBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblxuICAvKmZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDx3ZWlnaHQ+O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7Ki9cbn1cblxuI2ZvcmVjYXN0ID4gZGl2IHtcbiAgd2lkdGg6IDE2cmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5mb3JlY2FzdC1kYXkgaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XG59XG5cbi5mb3JlY2FzdC1kYXkgaDMge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEwOCU7XG4gIGNvbG9yOiB3aGVhdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAjZm9yZWNhc3Qge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5zcGFjZS14LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcbiAgICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogbm9uZTtcbiAgfVxuXG4gIC5zZWFyY2gtYmFyIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgfVxuXG4gIC5pbnB1dCBpbnB1dCB7XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTsrQ0FDNkM7O0VBRTdDOzs7NEJBRzBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcXG4gICAgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG5cXG4gIC8qZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICAgICAgICBmb250LXdlaWdodDogPHdlaWdodD47XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7Ki9cXG59XFxuXFxuI2ZvcmVjYXN0ID4gZGl2IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSBpbWcge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEwOCU7XFxuICBjb2xvcjogd2hlYXQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICNmb3JlY2FzdCB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5zcGFjZS14LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gICAgLS10dy1zcGFjZS14LXJldmVyc2U6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJhciB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgfVxcblxcbiAgLmlucHV0IGlucHV0IHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY29ubmVjdGVkIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZmlsdGVyQVBJRGF0YSB9IGZyb20gXCIuL2Rpc3RyaWJ1dGVBUElEYXRhXCI7XG5pbXBvcnQgeyBpbml0aWF0ZUxvYWRNb2RhbCB9IGZyb20gXCIuL2xvYWRpbmdNb2RhbFwiO1xuaW1wb3J0IHsgdG9nZ2xlVGVtcCB9IGZyb20gXCIuL3RlbXBUb2dnbGVcIjtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGaWVsZFwiKTtcblxuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgXG4gICAgLy8gUmVtb3ZlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzIFwiZGF5LWNvbnRhaW5lclwiXG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xuICAgIHdoaWxlIChmb3JlY2FzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBmb3JlY2FzdENvbnRhaW5lci5yZW1vdmVDaGlsZChmb3JlY2FzdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBUEkoc2VhcmNoRmllbGQudmFsdWUpO1xuICB9XG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFQSShzZWFyY2hGaWVsZFZhbHVlKSB7XG4gIGNvbnNvbGUubG9nKFwiVXNlciBlbnRlcmVkOlwiLCBzZWFyY2hGaWVsZFZhbHVlKTtcbiAgaW5pdGlhdGVMb2FkTW9kYWwodHJ1ZSk7XG4gIGxldCBtZXRyaWMgPSB0b2dnbGVUZW1wKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7c2VhcmNoRmllbGRWYWx1ZX0vbmV4dDZkYXlzP3VuaXRHcm91cD0ke21ldHJpY30mZWxlbWVudHM9ZGF0ZXRpbWUlMkNuYW1lJTJDdGVtcG1heCUyQ3RlbXBtaW4lMkN0ZW1wJTJDY29uZGl0aW9ucyUyQ2ljb24ma2V5PU5WWDJVTkVFUTJDMk02U1dMN0c3MzJFRUQmY29udGVudFR5cGU9anNvbmAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGZpbHRlckFQSURhdGEoZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRoZSB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBIaWRlIGxvYWRpbmcgc3Bpbm5lclxuICAgIGluaXRpYXRlTG9hZE1vZGFsKGZhbHNlKTtcbiAgICBcbiAgfVxufVxuIiwiaW1wb3J0IHsgaGFuZGxlQVBJIH0gZnJvbSBcIi4vYXBpSGFuZGxlclwiO1xuaW1wb3J0IHsgcmVwbGFjZU1ldHJpYyB9IGZyb20gXCIuL3RlbXBUb2dnbGVcIjtcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gXCIuL2dldERheU9mV2Vla1wiO1xuXG5leHBvcnQgY2xhc3MgZGlzdHJpYnV0ZUFQSURhdGEge1xuICBjb25zdHJ1Y3RvcihcbiAgICByZXNvbHZlZEFkZHJlc3MsXG4gICAgZGF0ZXRpbWUsXG4gICAgdGVtcCxcbiAgICB0ZW1wbWluLFxuICAgIHRlbXBtYXgsXG4gICAgY29uZGl0aW9ucyxcbiAgICBpY29uXG4gICkge1xuICAgIHRoaXMucmVzb2x2ZWRBZGRyZXNzID0gcmVzb2x2ZWRBZGRyZXNzIHx8IFwiVW5rbm93biBMb2NhdGlvblwiO1xuICAgIHRoaXMuZGF0ZXRpbWUgPSBkYXRldGltZSB8fCBcIlVua25vd24gRGF0ZVwiO1xuICAgIHRoaXMudGVtcCA9IHRlbXAgIT09IHVuZGVmaW5lZCA/IHRlbXAgOiBcIk4vQVwiO1xuICAgIHRoaXMudGVtcG1pbiA9IHRlbXBtaW4gIT09IHVuZGVmaW5lZCA/IHRlbXBtaW4gOiBcIk4vQVwiO1xuICAgIHRoaXMudGVtcG1heCA9IHRlbXBtYXggIT09IHVuZGVmaW5lZCA/IHRlbXBtYXggOiBcIk4vQVwiO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnMgfHwgXCJOL0FcIjtcbiAgICB0aGlzLmljb24gPSBpY29uIHx8IFwiZGVmYXVsdC1pY29uXCI7XG4gIH1cblxuICByZW5kZXJDdXJyZW50V2VhdGhlcihtZXRyaWNTeW1ib2wpIHtcbiAgICBjb25zdCBpY29uUGF0aCA9IHJlcXVpcmUoYC4vaWNvbnMvJHt0aGlzLmljb259LnBuZ2ApO1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXdlYXRoZXJcIik7XG4gICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIi1tbC00IC1tdC00IC1tYi0yXCIgc3JjPVwiJHtpY29uUGF0aH1cIiBhbHQ9XCIke3RoaXMuY29uZGl0aW9uc31cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIG1iLTIgZm9udC1ib2xkXCI+JHt0aGlzLnJlc29sdmVkQWRkcmVzc308L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXhsIHRlbXAgbWItMiB0ZXh0LWluZm8gZm9udC1zZW1pYm9sZFwiIGRhdGEtb3JpZ2luYWwtdGVtcD1cIiR7dGhpcy50ZW1wfVwiPiR7dGhpcy50ZW1wfSR7bWV0cmljU3ltYm9sfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcG1pblwiIGRhdGEtb3JpZ2luYWwtdGVtcD1cIiR7dGhpcy50ZW1wbWlufVwiPiR7dGhpcy50ZW1wbWlufSR7bWV0cmljU3ltYm9sfSA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS00MDBcIj4vPC9zcGFuPiBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcG1heCBtYi0yXCIgZGF0YS1vcmlnaW5hbC10ZW1wPVwiJHt0aGlzLnRlbXBtYXh9XCI+JHt0aGlzLnRlbXBtYXh9JHttZXRyaWNTeW1ib2x9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwPiR7dGhpcy5jb25kaXRpb25zfTwvcD5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHJlbmRlckZvcmVjYXN0KGRheUNvbnRhaW5lciwgbWV0cmljU3ltYm9sKSB7XG4gICAgY29uc3QgaWNvblBhdGggPSByZXF1aXJlKGAuL2ljb25zLyR7dGhpcy5pY29ufS5wbmdgKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBnZXREYXlPZldlZWsodGhpcy5kYXRldGltZSk7XG4gICAgZGF5Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1kYXkgYmctbmV1dHJhbCBwYi00IG1pbi1oLTUyIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB3LTY0XCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlcj48aW1nIHNyYz1cIiR7aWNvblBhdGh9XCIgYWx0PVwiJHt0aGlzLmNvbmRpdGlvbnN9XCI+PC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgPGgzPiR7ZGF5T2ZXZWVrfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZW1wbWluIHRleHQtd2hpdGVcIiBkYXRhLW9yaWdpbmFsLXRlbXA9XCIke3RoaXMudGVtcG1pbn1cIj4ke3RoaXMudGVtcG1pbn0ke21ldHJpY1N5bWJvbH0gPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNDAwXCI+Lzwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wbWF4XCIgZGF0YS1vcmlnaW5hbC10ZW1wPVwiJHt0aGlzLnRlbXBtYXh9XCI+JHt0aGlzLnRlbXBtYXh9JHttZXRyaWNTeW1ib2x9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuY29uZGl0aW9uc308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQVBJRGF0YShkYXRhKSB7XG4gIHRyeSB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpcyBiZWluZyBwYXNzZWQgdGhyb3VnaDpcIiwgZGF0YSk7XG5cbiAgICAgIGxldCBkYXlzID0gZGF0YS5kYXlzO1xuXG4gICAgICAvLyBFeHRyYWN0IG1pbi9tYXggdGVtcCBmcm9tIHRoZSBmaXJzdCBkYXkgaW4gdGhlIGZvcmVjYXN0IGlmIG5vdCBhdmFpbGFibGUgaW4gY3VycmVudCBjb25kaXRpb25zXG4gICAgICBjb25zdCB0b2RheUZvcmVjYXN0ID0gZGF5c1swXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wTWluID1cbiAgICAgICAgZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wbWluICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcG1pblxuICAgICAgICAgIDogdG9kYXlGb3JlY2FzdC50ZW1wbWluO1xuICAgICAgY29uc3QgY3VycmVudFRlbXBNYXggPVxuICAgICAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXBtYXggIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wbWF4XG4gICAgICAgICAgOiB0b2RheUZvcmVjYXN0LnRlbXBtYXg7XG5cbiAgICAgIC8vIEdldCBtZXRyaWMgc3ltYm9sIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCB0ZW1wZXJhdHVyZSB1bml0XG4gICAgICBjb25zdCBtZXRyaWNTeW1ib2wgPSByZXBsYWNlTWV0cmljKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFRvZ2dsZVwiKSk7XG5cbiAgICAgIC8vIFJlbmRlciBjdXJyZW50IHdlYXRoZXJcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IG5ldyBkaXN0cmlidXRlQVBJRGF0YShcbiAgICAgICAgZGF0YS5yZXNvbHZlZEFkZHJlc3MsXG4gICAgICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUsXG4gICAgICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcCxcbiAgICAgICAgY3VycmVudFRlbXBNaW4sXG4gICAgICAgIGN1cnJlbnRUZW1wTWF4LFxuICAgICAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMsXG4gICAgICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvblxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRXZWF0aGVyRGF0YS5yZW5kZXJDdXJyZW50V2VhdGhlcihtZXRyaWNTeW1ib2wpO1xuXG4gICAgICAvLyBSZW5kZXIgNi1kYXkgZm9yZWNhc3RcbiAgICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgICAgIGRheXMuc2xpY2UoMSwgNykuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRheURhdGEgPSBuZXcgZGlzdHJpYnV0ZUFQSURhdGEoXG4gICAgICAgICAgZGF0YS5yZXNvbHZlZEFkZHJlc3MsXG4gICAgICAgICAgZGF5LmRhdGV0aW1lLFxuICAgICAgICAgIGRheS50ZW1wLFxuICAgICAgICAgIGRheS50ZW1wbWluLFxuICAgICAgICAgIGRheS50ZW1wbWF4LFxuICAgICAgICAgIGRheS5jb25kaXRpb25zLFxuICAgICAgICAgIGRheS5pY29uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXktY29udGFpbmVyXCIpO1xuICAgICAgICBkYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1cIik7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XG4gICAgICAgIGRheURhdGEucmVuZGVyRm9yZWNhc3QoZGF5Q29udGFpbmVyLCBtZXRyaWNTeW1ib2wpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBpcyBOT1QgYmVpbmcgcGFzc2VkIHRocm91Z2hcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRGF0YSBQYXJhbWV0ZXIgaXMgTk9UIGJlaW5nIHJlY2VpdmVkXCIsIGVycm9yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6IFwibG9uZ1wiIH07XG4gIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpO1xufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2NsZWFyLWRheS5wbmdcIjogXCIuL3NyYy9pY29ucy9jbGVhci1kYXkucG5nXCIsXG5cdFwiLi9jbGVhci1uaWdodC5wbmdcIjogXCIuL3NyYy9pY29ucy9jbGVhci1uaWdodC5wbmdcIixcblx0XCIuL2Nsb3VkeS5wbmdcIjogXCIuL3NyYy9pY29ucy9jbG91ZHkucG5nXCIsXG5cdFwiLi9mb2cucG5nXCI6IFwiLi9zcmMvaWNvbnMvZm9nLnBuZ1wiLFxuXHRcIi4vaGFpbC5wbmdcIjogXCIuL3NyYy9pY29ucy9oYWlsLnBuZ1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvcGFydGx5LWNsb3VkeS1kYXkucG5nXCIsXG5cdFwiLi9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3BhcnRseS1jbG91ZHktbmlnaHQucG5nXCIsXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvcmFpbi1zbm93LXNob3dlcnMtZGF5LnBuZ1wiLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtbmlnaHQucG5nXCI6IFwiLi9zcmMvaWNvbnMvcmFpbi1zbm93LXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFwiLi9yYWluLXNub3cucG5nXCI6IFwiLi9zcmMvaWNvbnMvcmFpbi1zbm93LnBuZ1wiLFxuXHRcIi4vcmFpbi5wbmdcIjogXCIuL3NyYy9pY29ucy9yYWluLnBuZ1wiLFxuXHRcIi4vc2hvd2Vycy1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvc2hvd2Vycy1kYXkucG5nXCIsXG5cdFwiLi9zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3Nob3dlcnMtbmlnaHQucG5nXCIsXG5cdFwiLi9zbGVldC5wbmdcIjogXCIuL3NyYy9pY29ucy9zbGVldC5wbmdcIixcblx0XCIuL3Nub3ctc2hvd2Vycy1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvc25vdy1zaG93ZXJzLWRheS5wbmdcIixcblx0XCIuL3Nub3ctc2hvd2Vycy1uaWdodC5wbmdcIjogXCIuL3NyYy9pY29ucy9zbm93LXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFwiLi9zbm93LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3Nub3cucG5nXCIsXG5cdFwiLi90aHVuZGVyLXJhaW4ucG5nXCI6IFwiLi9zcmMvaWNvbnMvdGh1bmRlci1yYWluLnBuZ1wiLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLWRheS5wbmdcIjogXCIuL3NyYy9pY29ucy90aHVuZGVyLXNob3dlcnMtZGF5LnBuZ1wiLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3RodW5kZXItc2hvd2Vycy1uaWdodC5wbmdcIixcblx0XCIuL3RodW5kZXIucG5nXCI6IFwiLi9zcmMvaWNvbnMvdGh1bmRlci5wbmdcIixcblx0XCIuL3dpbmQucG5nXCI6IFwiLi9zcmMvaWNvbnMvd2luZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaWNvbnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwucG5nJFwiOyIsImltcG9ydCB7IGhhbmRsZUFQSSB9IGZyb20gXCIuL2FwaUhhbmRsZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlTG9hZE1vZGFsKGlzTG9hZGluZykge1xuICBsZXQgaW5pdGlhdGVMb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0aWF0ZUxvYWRNb2RhbFwiKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIGluaXRpYXRlTG9hZGluZy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPmA7XG4gIH0gZWxzZSBpZiAoaGFuZGxlQVBJICYmIGluaXRpYXRlTG9hZE1vZGFsKSB7XG4gICAgaW5pdGlhdGVMb2FkaW5nLmlubmVySFRNTCA9IGBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoYW5kbGVBUEkgfSBmcm9tIFwiLi9hcGlIYW5kbGVyXCI7XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgICBsZXQgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IGZ1bmMuYXBwbHkodGhpcywgYXJncyksIHdhaXQpO1xuICAgIH07XG59XG5cbi8vIFVzZSB0aGUgZGVib3VuY2UgZnVuY3Rpb24gdG8gbGltaXQgaG93IG9mdGVuIGhhbmRsZUFQSSBpcyBjYWxsZWRcbmNvbnN0IGRlYm91bmNlZEhhbmRsZUFQSSA9IGRlYm91bmNlKGhhbmRsZUFQSSwgMjUwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXAoKSB7XG4gICAgY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheS1jb250YWluZXInKTtcbiAgICBkYXlDb250YWluZXIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFRvZ2dsZVwiKTtcbiAgICBsZXQgbWV0cmljID0gdGVtcFRvZ2dsZS5jaGVja2VkID8gXCJ1c1wiIDogXCJtZXRyaWNcIjtcblxuICAgIHRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1ldHJpYyA9IHRoaXMuY2hlY2tlZCA/IFwidXNcIiA6IFwibWV0cmljXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlY2tlZCA/IFwiRmFocmVuaGVpdCBpcyBzZWxlY3RlZC5cIiA6IFwiQ2Vsc2l1cyBpcyBzZWxlY3RlZC5cIik7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZpZWxkXCIpO1xuICAgICAgICBkZWJvdW5jZWRIYW5kbGVBUEkoc2VhcmNoRmllbGQudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBtZXRyaWM7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0cmljO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTWV0cmljKHRlbXBUb2dnbGUpIHtcbiAgICBsZXQgbWV0cmljU3ltYm9sID0gdGVtcFRvZ2dsZS5jaGVja2VkID8gXCLCsEZcIiA6IFwiwrBDXCI7XG5cbiAgICAvLyBVcGRhdGUgbWV0cmljIHN5bWJvbHMgaW4gdGhlIFVJXG4gICAgY29uc3QgdGVtcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZXRyaWMtc3ltYm9sXCIpO1xuICAgIHRlbXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IG1ldHJpY1N5bWJvbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRyaWNTeW1ib2w7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=