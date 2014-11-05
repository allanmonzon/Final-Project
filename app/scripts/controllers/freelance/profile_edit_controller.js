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


    }

  }
});
