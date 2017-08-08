var RestaurantView= function(restaurants){
  this.render(restaurants);
}

RestaurantView.prototype = {
  render: function(restaurants){
    
    console.log(restaurants);
    restaurants.forEach( function(restaurant){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('restaurants');
      text.innerText = restaurant.name + ": " + restaurant.address
      li.appendChild(text);
      ul.appendChild(li);
    });
  }
}

 module.exports = RestaurantView;
 