Final.LoginFreelancerController = Ember.Controller.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  // init: function(){
  //   var self = this;
  //   this._super();

  //   if (localStorage.getItem('userAuth')) {
  //     var localAuthData = JSON.parse(localStorage.getItem('userAuth'));
  //     Final.ref.authWithCustomToken(localAuthData.token, function(error, authData) {
  //       if (!error) {
  //         self.store.find('freelancer', authData.uid).then(function(credentials) {
  //           self.set('currentUser', credentials);
  //           if ('freelancer') {
  //             self.transitionToRoute('profile.myprofile');
  //           } else {
  //             self.transitionToRoute('index');
  //           }
  //         });
  //       } else {
  //         console.log('Error authenticating user:', error);
  //       }
  //     });
  //   }
  // },

  actions: {

    login: function(){
      var self = this;
      var credentials = this.getProperties('email', 'password');
      Final.ref.authWithPassword(credentials, function(error, authData){
        if (!error) {
          localStorage.setItem('userAuth', JSON.stringify(authData));
          self.store.find('freelancer', authData.uid).then(function(credentials){
            self.set('currentUser', credentials);
          });
          self.transitionToRoute('profile.myprofile');
        } else {
          console.log('Error authenticating user:', error);
        }
      }, {
      remember: 'sessionOnly'
      });
    }

  }
});
