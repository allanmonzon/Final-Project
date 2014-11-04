Final.Freelancer = DS.Model.extend({
  userType: DS.attr('string'),
  email: DS.attr('string'),
  type: DS.attr('string'),
  name: DS.attr('string'),
  rate: DS.attr('number'),
  bio: DS.attr('string')
});
