Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application'],
  actions: {

    addAvatar: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('imgSrc', Blobs[0].url);
      });
    },

    addPortfolio: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('imgSrc', Blobs[0].url);
      });
    },

    saveProfile: function(){
      var user = this.get('controllers.application.currentUser');
      var name = this.getProperties('name');
      var bio = this.getProperties('bio');
      var rate = this.getProperties('rate');

      var profile = this.store.createRecord('freelancerProfile', {
        name: name,
        bio: bio,
        rate: rate
      });
      console.log(profile);

      user.set('profile', profile);
      var blah = user.get('isDirty');
      console.log(blah);
      //user.addObject('profile');
      user.save();
      console.log(user);

/*
      // Add the new comment to the post and save it
post.get("comments").addObject(comment);

// Saving the post will save the embedded comments
post.save();

*/
    }

  }
});
