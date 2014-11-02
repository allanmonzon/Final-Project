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
	this.route('client-home');

	/* ============ Freelance ============ */

	this.resource('profile', function (){
		this.route('edit');
		this.route('myprofile');
	});

	this.resource('jobs', function (){
		this.route('all');
	});

  this.route('my-bids');
});



// actions: {
//     logOut: function () {
//       Final.ref.unauth();
//       this.transitionToRoute('index');
//     }
//   }

