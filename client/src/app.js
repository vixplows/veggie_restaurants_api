var RestaurantView = require('./views/restaurantView');

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
  var url = "http://localhost:3000/api/restaurants";
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);