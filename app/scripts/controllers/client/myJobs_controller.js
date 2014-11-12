Final.MyJobsController = Ember.ArrayController.extend({
	needs: ['application'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	// itemController: 'bid',

});

// Final.BidController = Ember.ObjectController.extend({
// 	needs: ['application'],



// });
