Final.ProfileEdit = DS.Model.extend({
  name: DS.belongsTo('freelancer'),
  rate: DS.belongsTo('freelancer'),
  bio: DS.belongsTo('freelancer')
});
