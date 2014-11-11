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
	this.route('my-jobs');
	this.route('client-home');
	this.resource('client-profile', function(){
		this.route('create');
		this.route('edit');
		this.route('my', {path: ':id'});
	});


	/* ============ Freelance ============ */

	this.resource('freelancer', function () {
		this.route('home');
		this.resource('profile', function () {
			this.route('create');
			this.route('edit', { path: '/:id/edit' });
			this.route('my', {path: ':id'});
		});
	});

	this.resource('jobs', function (){
		this.route('all');
	});

  this.route('my-bids');
});
