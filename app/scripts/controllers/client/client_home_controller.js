Final.ProfileController = Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    logOut: function () {
      Final.ref.unauth();
      this.transitionToRoute('index');
    }
  }

});
