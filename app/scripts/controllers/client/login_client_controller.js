Final.LoginClientController = Ember.Controller.extend({
	needs: ['application'],
	currentUser: Ember.computed.alias('controllers.application.currentUser'),
	actions: {

		login: function(){   
			var self = this;
			var user = this.get('controllers.application.currentUser');	
			var credentials = this.getProperties('email', 'password');
			this.get('controllers.application').authenticate(credentials).then(function(){
        self.transitionToRoute('client-profile.my', user.id);
      });

		}

	}

});
