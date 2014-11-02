Final.ProfileEditController = Ember.Controller.extend({
  needs: ['application'],

  actions: {

    saveProfile: function(){
      //var self = this;
      var profileInfo = this.getProperties('name', 'rate', 'bio');
      console.log(profileInfo);
      var store = this.get('store');
      console.log(strore);
      //this.save();
    }

  }
});
