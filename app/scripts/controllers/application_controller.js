Final.ApplicationController = Ember.Controller.extend({
  currentUser: null,

  authenticate: function(credentials) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Final.ref.authWithPassword(credentials, function(error, authData) {
        self.configureSession(authData).then(resolve, reject);
      });
    });
  },

  authWithToken: function() {
    var self = this;
    if (localStorage.getItem('userAuth')) {
      var localAuthData = JSON.parse(localStorage.getItem('userAuth'));
      Final.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (!error) {
          self.store.find('user', authData.uid).then(function(user) {
            self.set('currentUser', user);
            resolve(user)
          }, function(error) {
            var user = self.store.recordForId('user', authData.uid);
            user.loadedData();
            self.set('currentUser', user);
            resolve(user);
          });
        } else {
          console.log('Error authenticating user:', error);
        }
      });
    }
  }

});
