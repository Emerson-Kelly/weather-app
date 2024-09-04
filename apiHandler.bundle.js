(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["apiHandler"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/apiHandler.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3lDOztBQUVsQztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksU0FBUyxrREFBUztBQUN0QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0Msa0RBQVM7O0FBRXRDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzdHJpYnV0ZUFQSURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0RGF5T2ZXZWVrLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ljb25zLyBzeW5jIF5cXC5cXC8uKlxcLnBuZyQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9hZGluZ01vZGFsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBUb2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXG4gICAgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG5cbiAgLypmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA8d2VpZ2h0PjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyovXG59XG5cbiNmb3JlY2FzdCA+IGRpdiB7XG4gIHdpZHRoOiAxNnJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xufVxuXG4uZm9yZWNhc3QtZGF5IGltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbi1ib3R0b206IC0xMnB4O1xufVxuXG4uZm9yZWNhc3QtZGF5IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMDglO1xuICBjb2xvcjogd2hlYXQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgI2ZvcmVjYXN0IHtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XG4gICAgLS10dy1zcGFjZS14LXJldmVyc2U6IG5vbmU7XG4gIH1cblxuICAuc2VhcmNoLWJhciB7XG4gICAgd2lkdGg6IDhyZW07XG4gIH1cblxuICAuaW5wdXQgaW5wdXQge1xuICAgIHdpZHRoOiAycmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7K0NBQzZDOztFQUU3Qzs7OzRCQUcwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsXFxuICAgIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuXFxuICAvKmZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDx3ZWlnaHQ+O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOyovXFxufVxcblxcbiNmb3JlY2FzdCA+IGRpdiB7XFxuICB3aWR0aDogMTZyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1kYXkgaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSBoMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxMDglO1xcbiAgY29sb3I6IHdoZWF0O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAjZm9yZWNhc3Qge1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxuXFxuICAuc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAgIC0tdHctc3BhY2UteC1yZXZlcnNlOiBub25lO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gIH1cXG5cXG4gIC5pbnB1dCBpbnB1dCB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNvbm5lY3RlZCB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGZpbHRlckFQSURhdGEgfSBmcm9tIFwiLi9kaXN0cmlidXRlQVBJRGF0YVwiO1xuaW1wb3J0IHsgaW5pdGlhdGVMb2FkTW9kYWwgfSBmcm9tIFwiLi9sb2FkaW5nTW9kYWxcIjtcbmltcG9ydCB7IHRvZ2dsZVRlbXAgfSBmcm9tIFwiLi90ZW1wVG9nZ2xlXCI7XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoRmllbGRcIik7XG5cbnNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIFxuICAgIC8vIFJlbW92ZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyBcImRheS1jb250YWluZXJcIlxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFwiKTtcbiAgICB3aGlsZSAoZm9yZWNhc3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgZm9yZWNhc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9yZWNhc3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQVBJKHNlYXJjaEZpZWxkLnZhbHVlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVBUEkoc2VhcmNoRmllbGRWYWx1ZSkge1xuICBjb25zb2xlLmxvZyhcIlVzZXIgZW50ZXJlZDpcIiwgc2VhcmNoRmllbGRWYWx1ZSk7XG4gIGluaXRpYXRlTG9hZE1vZGFsKHRydWUpO1xuICBsZXQgbWV0cmljID0gdG9nZ2xlVGVtcCgpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke3NlYXJjaEZpZWxkVmFsdWV9L25leHQ2ZGF5cz91bml0R3JvdXA9JHttZXRyaWN9JmVsZW1lbnRzPWRhdGV0aW1lJTJDbmFtZSUyQ3RlbXBtYXglMkN0ZW1wbWluJTJDdGVtcCUyQ2NvbmRpdGlvbnMlMkNpY29uJmtleT1OVlgyVU5FRVEyQzJNNlNXTDdHNzMyRUVEJmNvbnRlbnRUeXBlPWpzb25gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBmaWx0ZXJBUElEYXRhKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0aGUgd2VhdGhlciBkYXRhOlwiLCBlcnJvcik7XG4gIH0gZmluYWxseSB7XG4gICAgLy8gSGlkZSBsb2FkaW5nIHNwaW5uZXJcbiAgICBpbml0aWF0ZUxvYWRNb2RhbChmYWxzZSk7XG4gICAgXG4gIH1cbn1cbiIsImltcG9ydCB7IGhhbmRsZUFQSSB9IGZyb20gXCIuL2FwaUhhbmRsZXJcIjtcbmltcG9ydCB7IHJlcGxhY2VNZXRyaWMgfSBmcm9tIFwiLi90ZW1wVG9nZ2xlXCI7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tIFwiLi9nZXREYXlPZldlZWtcIjtcblxuZXhwb3J0IGNsYXNzIGRpc3RyaWJ1dGVBUElEYXRhIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVzb2x2ZWRBZGRyZXNzLFxuICAgIGRhdGV0aW1lLFxuICAgIHRlbXAsXG4gICAgdGVtcG1pbixcbiAgICB0ZW1wbWF4LFxuICAgIGNvbmRpdGlvbnMsXG4gICAgaWNvblxuICApIHtcbiAgICB0aGlzLnJlc29sdmVkQWRkcmVzcyA9IHJlc29sdmVkQWRkcmVzcyB8fCBcIlVua25vd24gTG9jYXRpb25cIjtcbiAgICB0aGlzLmRhdGV0aW1lID0gZGF0ZXRpbWUgfHwgXCJVbmtub3duIERhdGVcIjtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wICE9PSB1bmRlZmluZWQgPyB0ZW1wIDogXCJOL0FcIjtcbiAgICB0aGlzLnRlbXBtaW4gPSB0ZW1wbWluICE9PSB1bmRlZmluZWQgPyB0ZW1wbWluIDogXCJOL0FcIjtcbiAgICB0aGlzLnRlbXBtYXggPSB0ZW1wbWF4ICE9PSB1bmRlZmluZWQgPyB0ZW1wbWF4IDogXCJOL0FcIjtcbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zIHx8IFwiTi9BXCI7XG4gICAgdGhpcy5pY29uID0gaWNvbiB8fCBcImRlZmF1bHQtaWNvblwiO1xuICB9XG5cbiAgcmVuZGVyQ3VycmVudFdlYXRoZXIobWV0cmljU3ltYm9sKSB7XG4gICAgY29uc3QgaWNvblBhdGggPSByZXF1aXJlKGAuL2ljb25zLyR7dGhpcy5pY29ufS5wbmdgKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC13ZWF0aGVyXCIpO1xuICAgIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCItbWwtNCAtbXQtNCAtbWItMlwiIHNyYz1cIiR7aWNvblBhdGh9XCIgYWx0PVwiJHt0aGlzLmNvbmRpdGlvbnN9XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBtYi0yIGZvbnQtYm9sZFwiPiR7dGhpcy5yZXNvbHZlZEFkZHJlc3N9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC14bCB0ZW1wIG1iLTIgdGV4dC1pbmZvIGZvbnQtc2VtaWJvbGRcIiBkYXRhLW9yaWdpbmFsLXRlbXA9XCIke3RoaXMudGVtcH1cIj4ke3RoaXMudGVtcH0ke21ldHJpY1N5bWJvbH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRlbXBtaW5cIiBkYXRhLW9yaWdpbmFsLXRlbXA9XCIke3RoaXMudGVtcG1pbn1cIj4ke3RoaXMudGVtcG1pbn0ke21ldHJpY1N5bWJvbH0gPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNDAwXCI+Lzwvc3Bhbj4gXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBtYXggbWItMlwiIGRhdGEtb3JpZ2luYWwtdGVtcD1cIiR7dGhpcy50ZW1wbWF4fVwiPiR7dGhpcy50ZW1wbWF4fSR7bWV0cmljU3ltYm9sfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cD4ke3RoaXMuY29uZGl0aW9uc308L3A+XG4gICAgICAgIGA7XG4gIH1cblxuICByZW5kZXJGb3JlY2FzdChkYXlDb250YWluZXIsIG1ldHJpY1N5bWJvbCkge1xuICAgIGNvbnN0IGljb25QYXRoID0gcmVxdWlyZShgLi9pY29ucy8ke3RoaXMuaWNvbn0ucG5nYCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZ2V0RGF5T2ZXZWVrKHRoaXMuZGF0ZXRpbWUpO1xuICAgIGRheUNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yZWNhc3QtZGF5IGJnLW5ldXRyYWwgcGItNCBtaW4taC01MiByb3VuZGVkLWxnIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdy02NFwiPlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+PGltZyBzcmM9XCIke2ljb25QYXRofVwiIGFsdD1cIiR7dGhpcy5jb25kaXRpb25zfVwiPjwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDxoMz4ke2RheU9mV2Vla308L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVtcG1pbiB0ZXh0LXdoaXRlXCIgZGF0YS1vcmlnaW5hbC10ZW1wPVwiJHt0aGlzLnRlbXBtaW59XCI+JHt0aGlzLnRlbXBtaW59JHttZXRyaWNTeW1ib2x9IDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTQwMFwiPi88L3NwYW4+IFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcG1heFwiIGRhdGEtb3JpZ2luYWwtdGVtcD1cIiR7dGhpcy50ZW1wbWF4fVwiPiR7dGhpcy50ZW1wbWF4fSR7bWV0cmljU3ltYm9sfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHA+JHt0aGlzLmNvbmRpdGlvbnN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckFQSURhdGEoZGF0YSkge1xuICB0cnkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgYmVpbmcgcGFzc2VkIHRocm91Z2g6XCIsIGRhdGEpO1xuXG4gICAgICBsZXQgZGF5cyA9IGRhdGEuZGF5cztcblxuICAgICAgLy8gRXh0cmFjdCBtaW4vbWF4IHRlbXAgZnJvbSB0aGUgZmlyc3QgZGF5IGluIHRoZSBmb3JlY2FzdCBpZiBub3QgYXZhaWxhYmxlIGluIGN1cnJlbnQgY29uZGl0aW9uc1xuICAgICAgY29uc3QgdG9kYXlGb3JlY2FzdCA9IGRheXNbMF07XG4gICAgICBjb25zdCBjdXJyZW50VGVtcE1pbiA9XG4gICAgICAgIGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcG1pbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXBtaW5cbiAgICAgICAgICA6IHRvZGF5Rm9yZWNhc3QudGVtcG1pbjtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wTWF4ID1cbiAgICAgICAgZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wbWF4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcG1heFxuICAgICAgICAgIDogdG9kYXlGb3JlY2FzdC50ZW1wbWF4O1xuXG4gICAgICAvLyBHZXQgbWV0cmljIHN5bWJvbCBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgdGVtcGVyYXR1cmUgdW5pdFxuICAgICAgY29uc3QgbWV0cmljU3ltYm9sID0gcmVwbGFjZU1ldHJpYyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBUb2dnbGVcIikpO1xuXG4gICAgICAvLyBSZW5kZXIgY3VycmVudCB3ZWF0aGVyXG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBuZXcgZGlzdHJpYnV0ZUFQSURhdGEoXG4gICAgICAgIGRhdGEucmVzb2x2ZWRBZGRyZXNzLFxuICAgICAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lLFxuICAgICAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXAsXG4gICAgICAgIGN1cnJlbnRUZW1wTWluLFxuICAgICAgICBjdXJyZW50VGVtcE1heCxcbiAgICAgICAgZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zLFxuICAgICAgICBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmljb25cbiAgICAgICk7XG4gICAgICBjdXJyZW50V2VhdGhlckRhdGEucmVuZGVyQ3VycmVudFdlYXRoZXIobWV0cmljU3ltYm9sKTtcblxuICAgICAgLy8gUmVuZGVyIDYtZGF5IGZvcmVjYXN0XG4gICAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3RcIik7XG4gICAgICBkYXlzLnNsaWNlKDEsIDcpLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBkYXlEYXRhID0gbmV3IGRpc3RyaWJ1dGVBUElEYXRhKFxuICAgICAgICAgIGRhdGEucmVzb2x2ZWRBZGRyZXNzLFxuICAgICAgICAgIGRheS5kYXRldGltZSxcbiAgICAgICAgICBkYXkudGVtcCxcbiAgICAgICAgICBkYXkudGVtcG1pbixcbiAgICAgICAgICBkYXkudGVtcG1heCxcbiAgICAgICAgICBkYXkuY29uZGl0aW9ucyxcbiAgICAgICAgICBkYXkuaWNvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pdGVtXCIpO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xuICAgICAgICBkYXlEYXRhLnJlbmRlckZvcmVjYXN0KGRheUNvbnRhaW5lciwgbWV0cmljU3ltYm9sKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgTk9UIGJlaW5nIHBhc3NlZCB0aHJvdWdoXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGEgUGFyYW1ldGVyIGlzIE5PVCBiZWluZyByZWNlaXZlZFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZVN0cmluZykge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiBcImxvbmdcIiB9O1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTtcbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvY2xlYXItZGF5LnBuZ1wiLFxuXHRcIi4vY2xlYXItbmlnaHQucG5nXCI6IFwiLi9zcmMvaWNvbnMvY2xlYXItbmlnaHQucG5nXCIsXG5cdFwiLi9jbG91ZHkucG5nXCI6IFwiLi9zcmMvaWNvbnMvY2xvdWR5LnBuZ1wiLFxuXHRcIi4vZm9nLnBuZ1wiOiBcIi4vc3JjL2ljb25zL2ZvZy5wbmdcIixcblx0XCIuL2hhaWwucG5nXCI6IFwiLi9zcmMvaWNvbnMvaGFpbC5wbmdcIixcblx0XCIuL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1uaWdodC5wbmdcIjogXCIuL3NyYy9pY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiLFxuXHRcIi4vcmFpbi1zbm93LXNob3dlcnMtZGF5LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3JhaW4tc25vdy1zaG93ZXJzLWRheS5wbmdcIixcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcIi4vcmFpbi1zbm93LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3JhaW4tc25vdy5wbmdcIixcblx0XCIuL3JhaW4ucG5nXCI6IFwiLi9zcmMvaWNvbnMvcmFpbi5wbmdcIixcblx0XCIuL3Nob3dlcnMtZGF5LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3Nob3dlcnMtZGF5LnBuZ1wiLFxuXHRcIi4vc2hvd2Vycy1uaWdodC5wbmdcIjogXCIuL3NyYy9pY29ucy9zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcIi4vc2xlZXQucG5nXCI6IFwiLi9zcmMvaWNvbnMvc2xlZXQucG5nXCIsXG5cdFwiLi9zbm93LXNob3dlcnMtZGF5LnBuZ1wiOiBcIi4vc3JjL2ljb25zL3Nub3ctc2hvd2Vycy1kYXkucG5nXCIsXG5cdFwiLi9zbm93LXNob3dlcnMtbmlnaHQucG5nXCI6IFwiLi9zcmMvaWNvbnMvc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiLFxuXHRcIi4vc25vdy5wbmdcIjogXCIuL3NyYy9pY29ucy9zbm93LnBuZ1wiLFxuXHRcIi4vdGh1bmRlci1yYWluLnBuZ1wiOiBcIi4vc3JjL2ljb25zL3RodW5kZXItcmFpbi5wbmdcIixcblx0XCIuL3RodW5kZXItc2hvd2Vycy1kYXkucG5nXCI6IFwiLi9zcmMvaWNvbnMvdGh1bmRlci1zaG93ZXJzLWRheS5wbmdcIixcblx0XCIuL3RodW5kZXItc2hvd2Vycy1uaWdodC5wbmdcIjogXCIuL3NyYy9pY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQucG5nXCIsXG5cdFwiLi90aHVuZGVyLnBuZ1wiOiBcIi4vc3JjL2ljb25zL3RodW5kZXIucG5nXCIsXG5cdFwiLi93aW5kLnBuZ1wiOiBcIi4vc3JjL2ljb25zL3dpbmQucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ljb25zIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnBuZyRcIjsiLCJpbXBvcnQgeyBoYW5kbGVBUEkgfSBmcm9tIFwiLi9hcGlIYW5kbGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWF0ZUxvYWRNb2RhbChpc0xvYWRpbmcpIHtcbiAgbGV0IGluaXRpYXRlTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5pdGlhdGVMb2FkTW9kYWxcIik7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICBpbml0aWF0ZUxvYWRpbmcuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibG9hZGluZyBsb2FkaW5nLXNwaW5uZXIgbG9hZGluZy1sZ1wiPjwvc3Bhbj5gO1xuICB9IGVsc2UgaWYgKGhhbmRsZUFQSSAmJiBpbml0aWF0ZUxvYWRNb2RhbCkge1xuICAgIGluaXRpYXRlTG9hZGluZy5pbm5lckhUTUwgPSBgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaGFuZGxlQVBJIH0gZnJvbSBcIi4vYXBpSGFuZGxlclwiO1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLCB3YWl0KTtcbiAgICB9O1xufVxuXG4vLyBVc2UgdGhlIGRlYm91bmNlIGZ1bmN0aW9uIHRvIGxpbWl0IGhvdyBvZnRlbiBoYW5kbGVBUEkgaXMgY2FsbGVkXG5jb25zdCBkZWJvdW5jZWRIYW5kbGVBUEkgPSBkZWJvdW5jZShoYW5kbGVBUEksIDI1MCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUZW1wKCkge1xuICAgIGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktY29udGFpbmVyJyk7XG4gICAgZGF5Q29udGFpbmVyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBUb2dnbGVcIik7XG4gICAgbGV0IG1ldHJpYyA9IHRlbXBUb2dnbGUuY2hlY2tlZCA/IFwidXNcIiA6IFwibWV0cmljXCI7XG5cbiAgICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBtZXRyaWMgPSB0aGlzLmNoZWNrZWQgPyBcInVzXCIgOiBcIm1ldHJpY1wiO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrZWQgPyBcIkZhaHJlbmhlaXQgaXMgc2VsZWN0ZWQuXCIgOiBcIkNlbHNpdXMgaXMgc2VsZWN0ZWQuXCIpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hGaWVsZFwiKTtcbiAgICAgICAgZGVib3VuY2VkSGFuZGxlQVBJKHNlYXJjaEZpZWxkLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbWV0cmljO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldHJpYztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU1ldHJpYyh0ZW1wVG9nZ2xlKSB7XG4gICAgbGV0IG1ldHJpY1N5bWJvbCA9IHRlbXBUb2dnbGUuY2hlY2tlZCA/IFwiwrBGXCIgOiBcIsKwQ1wiO1xuXG4gICAgLy8gVXBkYXRlIG1ldHJpYyBzeW1ib2xzIGluIHRoZSBVSVxuICAgIGNvbnN0IHRlbXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWV0cmljLXN5bWJvbFwiKTtcbiAgICB0ZW1wRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBtZXRyaWNTeW1ib2w7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0cmljU3ltYm9sO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9