var RestaurantView = require('./views/restaurantView');
var RatingView = require('./views/ratingView');

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