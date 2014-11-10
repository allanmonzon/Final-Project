Final.CreateProfileController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
		createProfile: function(){
			var profile = this.store.createRecord('profile', {
				name: this.get('name'),
				info: this.get('info'),
				email: this.get('email'),
				number: this.get('number'),
        type: 'client'
			});
			profile.save();

			var user = this.get('controllers.application.currentUser');
			user.set('profile', profile);
		  user.save();
		},

    logOut: function(){
    	this.set('currentUser', null);
      localStorage.removeItem('userAuth');
      Final.ref.unauth();
      this.transitionToRoute('index');

    }
	}

});
