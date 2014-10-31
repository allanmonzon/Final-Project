Final.Router.map(function(){

	/* ============ General ============ */

	this.route('home');

	this.resource('signup', function () {
		this.route('client');
		this.route('freelancer');
	});

	this.resource('login', function() {
		this.route('client');
		this.route('freelancer');
	});

	/* ============ Client ============ */

	this.route('post-job');
	// this.route('create-profile');
	this.route('client-profile', { path: '/my-profile' });

	/* ============ Freelance ============ */

	this.resource('profile', function (){
		this.route('create');
		this.route('myprofile', {path: '/:_id'});
	});

	this.resource('jobs', function (){
		this.route('all');
	});

  this.route('my-bids');
});
