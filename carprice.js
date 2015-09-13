if (Meteor.isClient) {

  UI.registerHelper('formatCurrency', function(context, options) {
    if(context)
      return '$' + context.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  UI.registerHelper('constantize', function(context, options) {
    if(context)
      return context.toString().replace(/\s/g, "-").toLowerCase();
  });

  cars = function() {
    return [{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:129510,doors:2,variant:"Convertible"},{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:119510,doors:5,variant:"Hatch"},{brand:"Audi",model:"2015 Audi S5 Auto quattro MY16",price:119510,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 228i Luxury Line F22 Auto",price:64400,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 228i Luxury Line F22 Manual",price:64400,doors:2,variant:"Coupe"},{brand:"BMW",model:"2015 BMW 220i Luxury Line F22 Auto",price:52000,doors:2,variant:"Coupe"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C63 AMG S Auto",price:157010,doors:5,variant:"Wagon"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C63 AMG S Auto",price:1541045,doors:2,variant:"Sedan"},{brand:"Mercedes-Benz",model: "2015 Mercedes-Benz C300 h Auto",price:74900,doors:2,variant:"Sedan"}]
  }

  switchVisibility = function(target) {
    text = target.text();
    if (text == 'visibility') {
      $target.text('visibility_off');
    } else {
      $target.text('visibility');
    }
  }

  activateCategory = function(target) {
    category = $target.data('category');
    $('.category-card.' + category).toggleClass('active');  
  }

  Template.category.helpers({
    // cars: function() {
    //   return Cars.find();
    // },
    categories: function() {
      return [{category: 'Sports cars', model_count: 10, brand_count: 5, category_price: 50095, cars: cars()}];
    }
  });

  Template.category.events({
    'click .card-title .btn-floating': function(event) {
      $target  = $(event.target);
      switchVisibility($target);
      activateCategory($target);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
