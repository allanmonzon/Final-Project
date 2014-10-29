Final.ApplicationController = Ember.Controller.extend({
  currentUser: null,

  authenticate: function () {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      ref.authWithPassword(credentials, function(error, authData){
        resolve(authData);
      });
    });
  }
});
