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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var RestaurantView = function(restaurants){
  this.render(restaurants);
}

RestaurantView.prototype = {
  render: function(restaurants){
    
    console.log(restaurants);
    restaurants.forEach( function(restaurant){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('restaurants');
      text.innerText = restaurant.name + ": " + restaurant.address + ", " + restaurant.postcode;
      li.appendChild(text);
      ul.appendChild(li);
    });
  }
}

 module.exports = RestaurantView;
 

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var RestaurantView = __webpack_require__(0);
var RatingView = __webpack_require__(2);

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var restaurantString = this.responseText;
  var restaurants = JSON.parse(restaurantString);
  var restaurantView = new RestaurantView(restaurants);
}

var app = function(){
  var button = document.querySelector('#rating');

  button.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open("GET", '/ratings');
    request.addEventListener("load", function(){
      var body = document.querySelector('body');
      body.innerHTML = '';
      console.log(this.responseText);

      var ratingString = this.responseText;
      var ratings = JSON.parse(ratingString);
      var ratingView = new RatingView(ratings);
    });
    request.send();
  });

  var url = "http://localhost:3000/restaurants";
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var RatingView = function(restaurants) {
  this.render(restaurants);
}

RatingView.prototype = {
  render: function(restaurants) {

    restaurants.forEach( function(restaurant){

      var ul = document.createElement('ul')
      console.log(ul)
      var li = document.createElement('li');
      var text = document.createElement('p');
      var body = document.getElementById('body')
      text.innerText = restaurant.name + ". Rating: " + restaurant.rating;
      li.appendChild(text);
      ul.appendChild(li);
      body.appendChild(ul);
    });
  }
}

module.exports = RatingView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map