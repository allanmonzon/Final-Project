Final.ClientController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    logOut: function () {
      Final.ref.unauth();
      this.transitionToRoute('index');
    }
  }

});
