window.Final = Ember.Application.create();

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase("https://batch-maker-1.firebaseio.com")
});
