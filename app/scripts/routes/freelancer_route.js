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

<<<<<<< HEAD
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

=======
// Final.ProfileMyRoute = Ember.Route.extend({
//   // model: function(profile) {
//   //   var blah = this.store.find('freelancerProfile');
//   //   console.log(blah);
//   // }

//   // beforeModel: function() {
//   //   var user = this.controllerFor('application').get('currentUser');  
//   //   console.log(user);
//   //   if (!user) {
//   //     this.transitionTo('index');
//   //   }    
//   // },

//   // model: function(params) {
//   //   return this.store.find('freelancerProfile', params.freelancerProfile_id);
//   // }

// });

Final.FreelancerHomeRoute = Ember.Route.extend({
   model: function(){
    
    return this.store.find('job');
  }
>>>>>>> 21950c10f7f998943d839ab2a185d3978ee0803c
});
