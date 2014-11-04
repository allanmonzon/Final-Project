Final.SignupClientController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password');

      Final.ref.createUser(credentials, function(error){
        if (error === null) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (authData) {
            var user = self.store.createRecord('user', {
              id: authData.uid,
              userType: 'client',
              email: credentials.email,
            });
            localStorage.setItem('userAuth', JSON.stringify(authData));
            user.save();
          });
          self.transitionToRoute('login.client');
        } else {
          console.log(error);
        }
      });
    }
  }
});
