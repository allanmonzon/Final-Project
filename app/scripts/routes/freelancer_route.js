Final.ProfileEditRoute = Ember.Route.extend({
  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    console.log(user);
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function() {
    console.log(this.store.find('freelancerProfile'));
  }
});

Final.ProfileMyRoute = Ember.Route.extend({

  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser.id');
    console.log(user);
    if (!user) {
      this.transitionTo('index');
    }
  },

  model: function(p) {
    // var user = this.controllerFor('application').get('currentUser');
    // return this.store.find('freelancerProfile');
    return this.controllerFor('application').get('currentUser');
  }
});

Final.FreelancerHomeRoute = Ember.Route.extend({
   model: function(){
    return this.store.find('job');
  }
});
