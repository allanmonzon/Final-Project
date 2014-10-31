Final.LoginClientController = Ember.Controller.extend({
	needs: ['application'],

	actions: {
		login: function(){
      var self = this;
      var credentials = this.getProperties('email', 'password');
      Final.ref.authWithPassword(credentials, function(error, authData){
        if (!error) {
          self.get('controllers.application').authenticate(credentials);
          self.transitionToRoute('/my-profile');
        } else {
          console.log("Error authenticating user:", error);
        }
      }, {
      remember: "sessionOnly"
      });
    }
  }

});