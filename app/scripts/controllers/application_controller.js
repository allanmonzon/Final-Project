Final.ApplicationController = Ember.Controller.extend({
  currentUser: null,

  actions: {
    logOut: function(){
      this.set('currentUser', null);
      localStorage.removeItem('userAuth');
      Final.ref.unauth();
      this.transitionToRoute('index');
    }
  },

  init: function(){
    var self = this;
    this._super();

    if (localStorage.getItem('userAuth')) {
      var localAuthData = JSON.parse(localStorage.getItem('userAuth'));
      Final.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (!error) {
          if (self.currentPath === 'login.freelancer') {
            self.store.find('freelancer', authData.uid).then(function(credentials) {
              self.set('currentUser', credentials);
            });
          } else {
            self.store.find('client', authData.uid).then(function(credentials) {
              self.set('currentUser', credentials);
            });
          }
        } else {
          console.log('Error authenticating user:', error);
        }
      });
    }
  },

  authenticate: function (credentials) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Final.ref.authWithPassword(credentials, function(error, authData){
        resolve(authData);
      });
    });
  }
});
