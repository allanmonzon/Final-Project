Final.ProfileEditRoute = Ember.Route.extend({
  beforeModel: function(){
    var user = this.controllerFor('application').get('currentUser.id');
    console.log(user);
  },

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
  model: function(profile) {
    var blah = this.store.find('freelancerProfile');
    console.log(blah);
  }
});
