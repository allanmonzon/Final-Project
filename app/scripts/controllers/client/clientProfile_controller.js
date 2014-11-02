Final.ClientProfileController = Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
		createProfile: function(){
			var profile = this.store.createRecord('ClientProfile', {
				name: this.get('name'),
				info: this.get('info'),
				email: this.get('email'),
				number: this.get('number')
			});

			profile.save();
			this.set('name', '');
			this.set('info', '');
			this.set('email', '');
			this.set('number', '');
		},

    logOut: function(){
      this.set('currentUser', null);
      localStorage.removeItem('userAuth');
      Final.ref.unauth();
      this.transitionToRoute('index');
    } 
	}

});
