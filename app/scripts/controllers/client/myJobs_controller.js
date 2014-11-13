Final.ClientMyJobsController = Ember.ArrayController.extend({
	needs: ['application'],

	user: Ember.computed.alias('controllers.application.currentUser'),
	bidAccepted: false,
	bidRejected: false,

	// Need to each over the bids associated to the specific job
	// When a bid is accepted then th rest are automatically rejected
	// All bids will need to be removed, except for the winning bid

	// init: function() {
	// 	//this.super();
	// 	/return console.log('cool');
	// },

	actions: {

		acceptBid: function() {
			var cool = this.get('model');
			var cool = this.set('controllers.sentBids.bidAccepted', true);
			//this.set('bidAccepted', true);
			//var cooler = this.store.find('user');
			console.log(cool);
			//console.log(cooler);

		}

	}

});
