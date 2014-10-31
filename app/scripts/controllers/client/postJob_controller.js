Final.PostJobController = Ember.ArrayController.extend({
	needs: ['application'],

	actions: {
		createJob: function(){
			var job = this.store.createRecord('PostJob', {
				typeOfProject: this.get('typeOfProject')
			});

			console.log(job);

			job.save();
			this.set('typeOfProject', '');
		} 
	}

});