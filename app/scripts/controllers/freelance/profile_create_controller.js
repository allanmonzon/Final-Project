Final.ProfileCreateController = Ember.ArrayController.extend({
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

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src', Blobs[0].url);
      });
    },

    addPortfolioTwo: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src-2', Blobs[0].url);
      });
    },

    addPortfolioThree: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src-3', Blobs[0].url);
      });
    },

    addPortfolioFour: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src-4', Blobs[0].url);
      });
    },

    addPortfolioFive: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src-5', Blobs[0].url);
      });
    },

    addPortfolioSix: function() {
      var self = this;
      filepicker.setKey("A3T6mDAqcRqWxmPxj0ZJJz");

      filepicker.pickAndStore({},{},function(Blobs){
        self.set('img-port-src-6', Blobs[0].url);
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
        portfolioImgOne: this.get('img-port-src'),
        portfolioImgTwo: this.get('img-port-src-2'),
        portfolioImgThree: this.get('img-port-src-3'),
        portfolioImgFour: this.get('img-port-src-4'),
        portfolioImgFive: this.get('img-port-src-5'),
        portfolioImgSix: this.get('img-port-src-6'),
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
