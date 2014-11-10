Final.ProfileCreateController = Ember.Controller.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),

  actions: {

    addAvatar: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({
        maxFiles: 1
      },{},function(Blobs){
        self.set('imgSrc', Blobs[0].url);
      });
    },

    addPortfolio: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({

        maxFiles: 6,
        multiple: true

      },{},function(Blobs){
        self.set('img-port-src', Blobs[0].url);
      });
    },

    saveProfile: function(){
      var self = this;
      var user = this.get('controllers.application.currentUser');

      var profileInfo = this.store.createRecord('profile', {
        name: this.get('name'),
        bio: this.get('bio'),
        rate: this.get('rate'),
        avatar: this.get('imgSrc'),
        type: 'freelancer'
      });
      profileInfo.save().then(function(){
        self.transitionToRoute('profile.my', user.id);
      });
      user.set('profile', profileInfo);
      user.save();

    }

  }
});
