if (Meteor.isClient) {

  cars = function() {
    return [{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:129510,doors:2,variant:"Convertible"},{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:119510,doors:5,variant:"Hatch"},{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:119510,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 228i Luxury Line F22 Auto",price:64400,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 228i Luxury Line F22 Manual",price:64400,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 220i Luxury Line F22 Auto",price:52000,doors:2,variant:"Coupe"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C63 AMG S Auto",price:157010,doors:5,variant:"Wagon"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C63 AMG S Auto",price:1541045,doors:2,variant:"Sedan"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C300 h Auto",price:74900,doors:2,variant:"Sedan"}]
  }

  currencyPrice = function() {
    var price = this.price;
    return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  Template.category.helpers({
    // cars: function() {
    //   return Cars.find();
    // },
    categories: function() {
      // return [{title: 'Sports cars', cars: cars()}, {title: 'SUVs', cars: cars()}, {title: 'Wagons', cars: cars()}]
      return [{title: 'Sports cars', cars: cars()}];
    },
    currencyPrice: currencyPrice
  });

  Template.category.events({
    'click .card.category-card': function(event) {
      $parent = $(event.target).toggleClass('active');
    }
  });

  Template.carItem.helpers({
    currencyPrice: currencyPrice
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
