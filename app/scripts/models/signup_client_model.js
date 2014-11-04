Final.Client = DS.Model.extend({
  jobs: DS.hasMany('postJob', {async: true}),
  userType: DS.attr('string'),
  email: DS.attr('string')
});
