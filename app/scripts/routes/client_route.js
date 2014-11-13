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

	model: function(params) {
    return this.store.find('user', params.user_id);
  }
});

Final.ClientMyJobsRoute = Ember.Route.extend({
  model: function(){
    return this.controllerFor('application').get('currentUser.jobs');
  }
});

Final.ClientStaticRoute = Ember.Route.extend({
  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function(params) {
    return this.store.find('user', params.user_id);
  }
});

