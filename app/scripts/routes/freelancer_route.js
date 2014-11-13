Final.ProfileMyRoute = Ember.Route.extend({
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

Final.ProfileEditRoute = Ember.Route.extend({
  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function(params) {
    return this.controllerFor('application').get('currentUser');
  }
});

Final.FreelancerJobsRoute = Ember.Route.extend({
   model: function(){
    return this.store.find('job');
  }
});

Final.FreelancerMyBidsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('job');
  }
})

Final.FreelancerStaticRoute = Ember.Route.extend({
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
