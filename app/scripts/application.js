window.Final = Ember.Application.create();

Final.ApplicationAdapted = DS.FirebaseAdapter.extend({
	firebase: new Firebase('https://final-project-1.firebaseio.com/')
});
