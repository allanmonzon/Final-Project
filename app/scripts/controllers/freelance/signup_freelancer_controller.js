Final.SignupFreelancerController = Ember.Controller.extend({
  needs: ['application'],
  selectedType: null,
  type: ["Front-End Developer", "Back-End Developer", "Graphic Designer", "Web Designer", "Copywriter"],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password', 'selectedType');

      Final.ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (authData) {
            var user = self.store.createRecord('freelancer', {
              id: authData.uid,
              userType: 'freelancer',
              email: credentials.email,
              type: credentials.selectedType,
              name: null,
              bio: null,
              rate: null
            });
            localStorage.setItem('userAuth', JSON.stringify(authData));
            user.save();
          });
          self.transitionToRoute('login.freelancer');
        } else {
          console.log(error);
        }
      });
    }
  }
});
