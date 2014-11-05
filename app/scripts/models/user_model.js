Final.User = DS.Model.extend({
  userType: DS.attr('string'),
  email: DS.attr('string'),
  jobs: DS.hasMany('job', {async: true}),
<<<<<<< HEAD
=======
  // profile: DS.belongsTo('profile')
>>>>>>> e1ed94d2a9c502792a64894dc3fd86e88ff60b0b
});
