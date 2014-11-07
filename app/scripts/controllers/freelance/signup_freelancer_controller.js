Final.FreelancerSignupController = Ember.Controller.extend({
  needs: ['application'],
  selectedType: null,

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password', 'selectedType');

      Final.ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (authData) {
            var user = self.store.createRecord('user', {
              id: authData.uid,
              userType: 'freelancer',
              email: credentials.email,
            });
            localStorage.setItem('userAuth', JSON.stringify(authData));
            user.save();
          });
          self.transitionToRoute('profile.create');
        } else {
          console.log(error);
        }
      });
    }
  }
});
