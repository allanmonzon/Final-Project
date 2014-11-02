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

		} 

	}

});

// Final.ClientProfileController = Ember.ObjectController.extend({
//   isEditing: false,

//   actions: {
// 		edit: function() {
// 			this.set('isEditing', true);
// 		},

// 		doneEditing: function() {
// 			this.set('isEditing', false);
// 		}

// 	}

// });

