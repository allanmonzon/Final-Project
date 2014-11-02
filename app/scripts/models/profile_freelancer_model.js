Final.ProfileEditModel = DS.Model.extend({
  name: DS.belongsTo('currentUser'),
  rate: DS.belongsTo('currentUser'),
  bio: DS.belongsTo('currentUser')
});
