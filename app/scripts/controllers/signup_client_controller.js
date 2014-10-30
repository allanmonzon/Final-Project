Final.SignupClientController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    signup: function () {
      var self = this;
      var credentials = this.getProperties('email', 'password');
      Final.ref.createUser(credentials, function(error){
        if (!error) {
          self.get('controllers.application').authenticate(credentials)
          .then(function (authData) {
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email
            });
            user.save();
          });
          //setTimeout(transition, 2000);
        } else {
          console.log('failure');
        }
      });

      //function transition () {
      //  self.transitionToRoute('login');
      //}
    }
  }
    /*signup: function(){
      var self = this;
      var credentials = self.getProperties('email', 'password');
      Final.ref.createUser(credentials, function(error){
        if (!error) {
          console.log('this works');
          self.authenticate(credentials).then(function (authData) {
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email
            });
            user.save();
          });
        } else {
          console.log('this failed')
        }
      });
    }
  }*/
});
