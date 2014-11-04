Final.PostJobController = Ember.Controller.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),

	actions: {
		createJob: function(){
			// var job = this.store.createRecord('PostJob', {
			// 	typeOfProject: this.get('typeOfProject')
			// });

			// console.log(job);

			// job.save();
			// this.set('typeOfProject', '');

			var self = this;
			var workflow = Final.PostJobWorkflow.create({
				attributes: {
					typeOfProject: this.get('typeOfProject')
				},
				store: this.get('store'),
				userID: this.get('user.ID')
			});
			workflow.run();
		} 
	}

});