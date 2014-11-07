window.Final = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Final.ref = new Firebase('https://final-project-1.firebaseio.com/');

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: Final.ref
});


Final.initializer({
	name: "preload",

	initialize: function(container) {
		Final.deferReadiness();

		if (localStorage.getItem('userAuth')) {

			var localAuthData = JSON.parse(localStorage.getItem('userAuth'));
			Final.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
				if (!error) {

					var store = container.lookup('store:main');
					var appController = container.lookup('controller:application');

				  store.find('user', authData.uid).then(function(user) {
						appController.set('currentUser', user);
						Final.advanceReadiness();
					});

				} else {

					console.log('Error authenticating user:', error);

				}
			});
		}
	}
});
