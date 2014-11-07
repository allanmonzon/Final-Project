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

Final.ProfileRoute = Ember.Route.extend({
  beforeModel: function(){
    var user = this.controllerFor('application').get('currentUser');  
    console.log(user);
    if (!user) {
      this.transitionTo('index');
    }    
  },

	model: function(params){
		var cool =  this.controllerFor('application').get('currentUser');	
   	console.log(cool);
	}
});