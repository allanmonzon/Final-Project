Final.FreelancerHomeController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),

	actions: {

		placeBid: function () {
			var self = this;
			var jobs = this.store.find('job')

			var workflow = Final.BidsWorkflow.create({
				attributes: {
					bidSent: true
				},
				store: this.get('store'),
				userID: this.get('user.id')
			});
			workflow.run();
			console.log(jobs);
		}
	}
});
