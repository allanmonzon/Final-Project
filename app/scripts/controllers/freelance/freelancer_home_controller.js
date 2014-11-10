Final.FreelancerHomeController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	itemController: 'job',
});

Final.JobController = Ember.ObjectController.extend({
	needs: ['application'],

	init: function() {
		this._super();
		var cool = this.get('model', this.model.id);
		console.log(cool);
	},

	actions: {

		placeBid: function () {
			var self = this;
			var user = this.get('controllers.application.currentUser');
			var jobs = this.get('model');
			console.log(jobs);

			var bid = this.store.createRecord('bid', {
				bidSent: true,
				user: user,
				job: jobs
			});
			bid.save();

      user.get('bids').addObject(bid);
			user.save();
			jobs.get('bids').addObject(bid);
			jobs.save();

			// var workflow = Final.BidsWorkflow.create({
			// 	attributes: {
			// 		bidSent: true
			// 	},
			// 	store: this.get('store'),
			// 	userID: this.get('user.id'),
			// 	jobID: this.get('job.id')
			// });
			// workflow.run();
		}
	}
});
