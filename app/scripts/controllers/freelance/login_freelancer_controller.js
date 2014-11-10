Final.LoginFreelancerController = Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {

    login: function(){
      var self = this;
      var credentials = this.getProperties('email', 'password');
      // Final.ref.authWithPassword(credentials, function(error, authData) {
      //   if (!error) {
      //     localStorage.setItem('userAuth', JSON.stringify(authData));
      //     self.store.find('user', authData.uid);
      //     self.transitionToRoute('profile.my');
      //   } else {
      //     console.log('Error authenticating user:', error);
      //   }
      // }, {
      // remember: 'sessionOnly'
      // });

      this.get('controllers.application').authenticate(credentials).then(function() {
        var user = self.get('controllers.application.currentUser');
        self.transitionToRoute('profile.my', user.id);
      });

    }

  }
});
