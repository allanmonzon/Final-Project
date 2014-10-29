Final.SignupClientController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = self.getProperties('email', 'password');
      console.log(self);
      ref.createUser(credentials, function (error) {
        if (!error) {
          console.log('success');
          self.get('controllers.application').authenticate(credentials)
          .then(function (authData) {
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email
            });
            user.save();
          });
          setTimeout(transition, 2000);
        } else {
          console.log('failure');
        }
      });

      function transition () {
        self.transitionToRoute('login');
      }
    }
  }
});
