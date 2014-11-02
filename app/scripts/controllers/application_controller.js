Final.ApplicationController = Ember.Controller.extend({
  currentUser: null,

  init: function(){
    var self = this;
    this._super();

    if (localStorage.getItem('userAuth')) {
      var localAuthData = JSON.parse(localStorage.getItem('userAuth'));
      Final.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
        if (!error) {
          self.store.find('freelancer' || 'client', authData.uid).then(function(credentials) {
            self.set('currentUser', credentials);
          });
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
  },

  actions: {
    logOut: function(){
      this.set('currentUser', null);
      localStorage.removeItem('userAuth');
      Final.ref.unauth();
      this.transitionToRoute('index');
    }
  }
});
