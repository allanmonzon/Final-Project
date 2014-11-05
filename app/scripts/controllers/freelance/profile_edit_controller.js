Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
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

      user.set('profile', profile);
      //user.save();
      console.log(user)
    }

  }
});
