Final.Client = DS.Model.extend({
  email: DS.attr('string'),
  jobs: DS.hasMany('postJob', {async: true})
});
