Final.SignupClientController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password');

      Final.ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (user) {
            user.setProperties ({
              // id: authData.uid,
              userType: 'client',
              email: credentials.email,
            });
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
