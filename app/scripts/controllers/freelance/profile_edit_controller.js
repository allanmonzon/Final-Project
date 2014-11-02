Final.ProfileEditController = Ember.Controller.extend({
  actions: {

    saveProfile: function(){
      var self = this;
      this.setProperties('curerntUser', {
        name: self.get('name'),
        rate: self.get('rate'),
        bio: self.get('bio'),
      });
      this.model.save();
    }

  }
});
