Final.ClientProfileCreateController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
		createProfile: function(){
			var self = this;
			var user = this.get('controllers.application.currentUser');
			var profile = this.store.createRecord('profile', {
				name: this.get('name'),
				bio: this.get('bio'),
				email: this.get('email'),
				number: this.get('number'),
        type: 'client'
			});
			profile.save().then(function(id){
				self.transitionToRoute('client-profile.my', user.id);
			});
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
