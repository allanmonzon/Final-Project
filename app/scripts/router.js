Final.Router.map(function(){

	/* ============ General ============ */

	this.route('home');

	this.resource('signup', function () {
		this.route('client');
	});

	this.resource('login', function() {
		this.route('client');
	});

	/* ============ Client ============ */

	this.route('post-job');
	this.resource('profil', {path: '/:profile_id'});
	this.route('create-profile');
	this.route('client-home');

	/* ============ Freelance ============ */

	this.resource('freelancer', function () {
		this.route('signup');
		this.route('login');
		this.resource('profile', function () {
			this.route('create');
			this.route('edit')//, { path: '/:user_id/edit' });
			this.route('my');
		});
	});

	this.resource('jobs', function (){
		this.route('all');
	});

  this.route('my-bids');
});
