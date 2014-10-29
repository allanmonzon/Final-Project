window.Final = Ember.Application.create({
	LOG_TRANSITIONS: true
});

var ref = new Firebase('https://final-project-1.firebaseio.com/');

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: ref
});
