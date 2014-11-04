Final.FreelancerLoginController = Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {

    login: function(){
      var self = this;
      var credentials = this.getProperties('email', 'password');
      Final.ref.authWithPassword(credentials, function(error, authData) {
        if (!error) {
          localStorage.setItem('userAuth', JSON.stringify(authData));
          self.store.find('user', authData.uid).then(function(credentials){
            self.set('currentUser', credentials);
          });
          self.transitionToRoute('profile.myprofile');
        } else {
          console.log('Error authenticating user:', error);
        }
      }, {
      remember: 'sessionOnly'
      });
    }

  }
});
