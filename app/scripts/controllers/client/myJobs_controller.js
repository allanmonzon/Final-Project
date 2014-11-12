Final.MyJobsController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	itemController: 'bid',

});

Final.BidController = Ember.ObjectController.extend({
	needs: ['application'],

	init: function() {
		this._super();

		var model = this.get('model');
		var jobs = model.serialize();
		var bidsID = jobs.bids;
		console.log(bidsID);

	}

});
