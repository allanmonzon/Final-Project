Final.User = DS.Model.extend({
  userType: DS.attr('string'),
  email: DS.attr('string'),
  jobs: DS.hasMany('job', {async: true}),
  profile: DS.belongsTo('profile')
});
