"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["apiHandler"],{

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextGif: () => (/* binding */ nextGif)
/* harmony export */ });
const img = document.querySelector('img');
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener('keypress', function (e) {
    e.preventDefault();
    if (e.key === 'Enter') {
       
    nextGif();
    }
});

function nextGif() {
    alert('working');
   
    /*
    let searchField = document.getElementById("searchField").value;
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=D70aYrsJ8TY8DoMCRA1tHUiNh8hxIIy8&s=' + searchField, { mode: 'cors' })
    try {
        response.json().then(function (response) {
            if (response.data && response.data.images && response.data.images.original) {
                img.src = response.data.images.original.url;
            }
            else {
                alert("No GIF found for this search term.");
                img.src = '';
            }
        });
    }
    catch (error) {
        alert("Error fetching the GIF:", error);
    }
    */
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/apiHandler.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpSGFuZGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0lBQXdJLGNBQWM7QUFDdEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJ1dHRvblwiKTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgXG4gICAgbmV4dEdpZigpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV4dEdpZigpIHtcbiAgICBhbGVydCgnd29ya2luZycpO1xuICAgXG4gICAgLypcbiAgICBsZXQgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEZpZWxkXCIpLnZhbHVlO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUQ3MGFZcnNKOFRZOERvTUNSQTF0SFVpTmg4aHhJSXk4JnM9JyArIHNlYXJjaEZpZWxkLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pbWFnZXMgJiYgcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJObyBHSUYgZm91bmQgZm9yIHRoaXMgc2VhcmNoIHRlcm0uXCIpO1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIHRoZSBHSUY6XCIsIGVycm9yKTtcbiAgICB9XG4gICAgKi9cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=