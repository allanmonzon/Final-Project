Final.Profile = DS.Model.extend({});

Final.FreelancerProfile = Final.Profile.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  rate: DS.attr('number')
});

Final.ClientProfile = Final.Profile.extend({
  name: DS.attr('string'),
  info: DS.attr('string'),
  email: DS.attr('string'),
  number: DS.attr('string'),
  user: DS.belongsTo('user')
});
