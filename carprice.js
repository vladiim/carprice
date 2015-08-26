if (Meteor.isClient) {

  Template.all.helpers({
    cars: function() {
      return Cars.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
