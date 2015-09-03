if (Meteor.isClient) {

  Template.all.helpers({
    cars: function() {
      return Cars.find();
    },
    currencyPrice: function() {
      var price = this.price;
      return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
