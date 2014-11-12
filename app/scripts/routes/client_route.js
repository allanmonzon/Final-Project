Final.CreateProfileRoute = Ember.Route.extend({
	beforeModel: function(){
  var user = this.controllerFor('application').get('currentUser');
    console.log(user);
    if (!user) {
      this.transitionTo('index');
    }
  }
});

// Final.ClientHomeRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('ClientProfile');
//   }

// });

// Final.PostJobRoute = Ember.Route.extend({
// 	 beforeModel: function(){
// 	 	var user = this.get('controllers.application.currentUser');
//     if (user === null ) {
//       this.transitionTo('index');
//     }
//   },
// })

Final.ClientProfileMyRoute = Ember.Route.extend({
  beforeModel: function(){
    var user = this.controllerFor('application').get('currentUser');
    //console.log(user);
    if (!user) {
      this.transitionTo('index');
    }
  },

	model: function(){
		return this.controllerFor('application').get('currentUser');
   	//console.log(cool);
	}
});

Final.MyJobsRoute = Ember.Route.extend({
  // setupController: function(controller, model) {
  //   var myJobs = this.controllerFor('application')
  //     .get('currentUser.jobs');
  //   myJobs.then(function() {
  //     controller.set('myJobs', myJobs.slice(-4));
  //   });
  // },

   model: function(){
    return this.controllerFor('application').get('currentUser.jobs');
  }

});

