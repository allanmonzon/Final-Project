Final.PostJobWorkflow = Ember.Object.extend({
	fetchUser: function() {
    var self = this;
    return this.store.find('client', this.userID)
      .then(function(user) {
        self.set('user', user);
      });
  },

  postJob: function() {
    var config = Ember.merge({
      user: this.user,
    }, this.attributes);
    this.set('postJob', this.store.createRecord('postJob',config));
    return this.get('postJob').save();
  },

  addJobToClient: function() {
    this.get('client.jobs').addObject(this.get('postJob'));
    return this.get('client').save();
  },

  run: function() {
    return this.fetchUser()
      .then(this.postJob.bind(this))
      .then(this.addJobToClient.bind(this));
  }

});