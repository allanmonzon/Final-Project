Final.MyJobsController = Ember.ArrayController.extend({
	needs: ['application', 'bid'],
	user: Ember.computed.alias('controllers.application.currentUser'),
	//itemController: 'bid',

});

Final.BidController = Ember.ArrayController.extend({
	needs: ['application'],



});
