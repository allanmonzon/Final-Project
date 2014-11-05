Final.ClientProfileController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
		createProfile: function(){
			var profile = this.store.createRecord('clientProfile', {
				name: this.get('name'),
				info: this.get('info'),
				email: this.get('email'),
				number: this.get('number')
			});

			var user = this.get('controllers.application.currentUser');
			user.set('profile', profile);
			user.save();

			// profile.save();
			// this.set('name', '');
			// this.set('info', '');
			// this.set('email', '');
			// this.set('number', '');
		},

    logOut: function(){
      this.set('currentUser', null);
      localStorage.removeItem('userAuth');
      Final.ref.unauth();
      this.transitionToRoute('index');
    } 
	}

});


