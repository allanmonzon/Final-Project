Final.MyJobsController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),

	// Need to each over the bids associated to the specific job

	actions: {

		acceptBid: function() {
			console.log('cool');
		}

	}

});

