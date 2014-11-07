Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application'],

  currentUser: function() {
    var currentUser = this.get('controllers.application.currentUser');
    console.log(currentUser);
  }
});
