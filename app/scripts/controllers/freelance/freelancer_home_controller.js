Final.FreelancerHomeController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	itemController: 'job',
});

Final.JobController = Ember.ObjectController.extend({
	needs: ['application'],

	init: function() {
		this._super();
		return this.get('model', this.model.id);
	},

	actions: {

		placeBid: function () {
			var self = this;
			var user = this.get('controllers.application.currentUser');
			var jobs = this.get('model');

			var bid = this.store.createRecord('bid', {
				bidSent: true,
				user: user,
				job: jobs
			});
			//bid.save();

      //user.get('bids').addObject(bid);
			//user.save();
			//jobs.get('bids').addObject(bid);
			//jobs.save();
			this.set('placedBid', true);
			this.save();
		}
	},

	placedBid: false,
});
