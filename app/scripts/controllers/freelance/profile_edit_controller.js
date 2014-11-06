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

      var profileInfo = this.store.createRecord('freelancerProfile', {
        name: this.get('name'),
        bio: this.get('bio'),
        rate: this.get('rate')
      });
      console.log(profileInfo);
      console.log(user);

      user.set('profile', profileInfo);
      user.addObject(profileInfo);

      //user.addObject(profile);
      //console.log(user);
      //profile.save();
    }

  }
});
