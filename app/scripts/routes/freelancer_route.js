Final.ProfileEditRoute = Ember.Route.extend({
  model: function(){
    return this.controllerFor('application').get('currentUser');
  },
/*
  afterModel: function(){
    var user = this.controllerFor('application').get('currentUser.id');
    console.log(user);
  }
/*
  model: function(profile) {
    //var user = this.store.find('user');
    //console.log(controller);

    //return this.store.find('freelancerProfile', profile.id);
  }*/
});

Final.ProfileMyRoute = Ember.Route.extend({

  beforeModel: function() {
    var user = this.controllerFor('application').get('currentUser');
    console.log(user);
    if (user === null) {
      this.transitionTo('index');
    }
  },

  model: function(profile) {
    var user = this.controllerFor('application').get('currentUser');
    return this.store.find('freelancerProfile')
  }

});
