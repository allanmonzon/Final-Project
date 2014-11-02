 Final.ProfileMyprofileController = Ember.Controller.extend({
   needs: ['application'],

   actions: {
     logOut: function(){
       this.set('currentUser', null);
       localStorage.removeItem('userAuth');
       Final.ref.unauth();
       this.transitionToRoute('index');
     }
   }
 });
