Final.PostJobWorkflow = Ember.Object.extend({
	fetchUser: function() {
    var self = this;
    return this.store.find('user', this.userID)
      .then(function(user) {
        self.set('user', user);
      });
  },

  postJob: function() {
    var config = Ember.merge({
      user: this.user,
    }, this.attributes);
    this.set('job', this.store.createRecord('job',config));
    return this.get('job').save();
  },

  addJobToClient: function() {
    this.get('user.jobs').addObject(this.get('job'));
    return this.get('user').save();
  },

  run: function() {
    return this.fetchUser()
      .then(this.postJob.bind(this))
      .then(this.addJobToClient.bind(this))
  }

});

Final.BidsWorkflow = Ember.Object.extend({
	fetchUser: function() {
		var self = this;
		return this.store.find('user', this.userID)
			.then(function(user) {
				self.set('user', user);
			});
	},

	postBid: function() {
		var config = Ember.merge({
			user: this.user,
		}, this.attributes);

		this.set('bid', this.store.createRecord('bid',config));
		return this.get('bid').save();
	},

	addBidToUser: function() {
		this.get('user.bids').addObject(this.get('bid'));
		return this.get('user').save();
	},

	run: function() {
		return this.fetchUser()
			.then(this.postBid.bind(this))
			.then(this.addBidToUser.bind(this))
	}

});


Final.FreelanceProfileWorkflow = Ember.Object.extend({
	fetchUser: function() {
		var self = this;
		var cool = this.get('controllers.application.currentUser.id')
		console.log(cool);
			cool.then(function(user) {
				self.set('user', user);
			});
	},

	create: function() {
		var config = Ember.merge({
			user: this.user,
		}, this.attributes);

		this.set('profile', this.store.createRecord('freelancerProfile',config));
		return this.get('profile').save();
	},

	addToUser: function() {
		this.get('user.profile').addObject(this.get('freelancerProfile'));
		return this.get('user').save();
	},

	run: function() {
		return this.fetchUser()
			.then(this.create.bind(this))
			.then(this.addToUser.bind(this))
	}

});
