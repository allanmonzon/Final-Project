Final.Router.map(function(){

	/* ============ General ============ */

	this.route('home')

	/* ============ Client ============ */

	this.route('post-job');
	this.route('create-profile');

	/* ============ Freelance ============ */

	this.resource('profile', function (){
		this.route('create');
		this.route('myprofile');
	});

	this.resource('jobs', function (){
		this.route('all');
	});

	this.route('my-bids');
});
