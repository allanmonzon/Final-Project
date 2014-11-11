Final.Profile = DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  rate: DS.attr('number'),
  avatar: DS.attr('string'),
  portfolioImgOne: DS.attr('string'),
  portfolioImgTwo: DS.attr('string'),
  portfolioImgThree: DS.attr('string'),
  portfolioImgFour: DS.attr('string'),
  portfolioImgFive: DS.attr('string'),
  portfolioImgSix: DS.attr('string'),
  user: DS.belongsTo('user'),
  info: DS.attr('string'),
  email: DS.attr('string'),
  number: DS.attr('string'),
  type: DS.attr('string')
});
