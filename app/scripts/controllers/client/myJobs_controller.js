Final.MyJobsController = Ember.ArrayController.extend({
	needs: 'application',
	user: Ember.computed.alias('controllers.application.currentUser'),
	itemController: 'bid',
});

Final.BidController = Ember.ObjectController.extend({
	needs: 'application',

	init: function() {
		this._super();
		var cool = this.get('model', this.model.user);
		console.log(cool);
	},

});