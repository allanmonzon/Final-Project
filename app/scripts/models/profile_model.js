Final.Profile = DS.Model.extend();

Final.FreelancerProfile = Final.Profile.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  rate: DS.attr('number')
});
