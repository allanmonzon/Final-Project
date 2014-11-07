window.Final = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Final.ref = new Firebase('https://final-project-1.firebaseio.com/');

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: Final.ref
});
