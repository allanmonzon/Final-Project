Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application'],

  currentUser: function() {
    var currentUser = this.get('controllers.application.currentUser');
    console.log(currentUser);
  },

  actions: {
     logOut: function(){
       this.set('currentUser', null);
       localStorage.removeItem('userAuth');
       Final.ref.unauth();
       this.transitionToRoute('index');
     }
   }

});
