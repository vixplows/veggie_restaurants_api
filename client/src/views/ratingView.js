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