Final.ProfileEditRoute = Ember.Route.extend({
  model: function(){
    var id = this.controllerFor('application').get('currentUser.id');
    console.log(id);
    // console.log(this.store.find('user', id));
    // console.log(localStorage.getItem('userAuth.uid'));
    // console.log(localStorage.getItem('userAuth'));
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
});
