Final.MyJobsController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	itemController: 'bid',

});

Final.BidController = Ember.ObjectController.extend({
	needs: ['application'],

	// Get the number of bids
	// Associate the jobs.bid.id to the bid.user.id
	// Display name of the user off the User model

	init: function() {
		this._super();

		var model = this.get('model');
		var jobs = model.serialize();
		var bidsID = jobs.bids;
		//console.log(jobs);

		var bidsModel = this.store.all('bid');
		//var cool = bidsModel.serialize();
		console.log(bidsModel);
		//console.log(cool);
	}

});
