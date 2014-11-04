Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application', 'SignupFreelancer', 'LoginFreelancer'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions: {

    saveProfile: function(){
      var self = this;
      var name = this.getProperties('name');
      var rate = this.getProperties('rate');
      var bio = this.getProperties('bio');

      /*var blah = this.store.find('freelancer').then(function(currentUser) {
        self.set('currentUser', self.uid);
      });*/

      //var store = this.store.find('freelancer');
      console.log(localStorage.getItem('userAuth.uid'));

    /*  this.store.push({
        name: name,
        rate: rate,
        bio: bio
      });*/

    }

  }
});
