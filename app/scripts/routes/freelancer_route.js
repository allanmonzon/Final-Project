Final.ProfileMyRoute = Ember.Route.extend({

  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return this.controllerFor('application').get('currentUser');
  }
});

Final.ProfileEditRoute = Ember.Route.extend({
  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return this.controllerFor('application').get('currentUser');
  }
});

Final.FreelancerHomeRoute = Ember.Route.extend({
   model: function(){
    return this.store.find('job');
  }
});
