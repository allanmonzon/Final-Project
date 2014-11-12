Final.CreateProfileRoute = Ember.Route.extend({
	beforeModel: function(){
  var user = this.controllerFor('application').get('currentUser');
    if (!user) {
      this.transitionTo('index');
    }
  }
});

Final.ClientProfileMyRoute = Ember.Route.extend({
  beforeModel: function(){
    var user = this.controllerFor('application').get('currentUser');
    if (!user) {
      this.transitionTo('index');
    }
  },

	model: function(){
		return this.controllerFor('application').get('currentUser');
	}
});

Final.MyJobsRoute = Ember.Route.extend({
  model: function(){
    return this.controllerFor('application').get('currentUser.jobs');
  }

});
