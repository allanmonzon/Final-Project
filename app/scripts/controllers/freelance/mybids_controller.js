Final.FreelancerMyBidsController = Ember.ArrayController.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),
  itemController: 'sentBids',
});

Final.SentBidsController = Ember.ObjectController.extend({
  needs: ['application', 'myjobs'],

  placedBid: false,
  bidAccepted: false,
  bidRejected: false,

  /*
  userBids: Ember.computed.alias('controlers.application.currentUser.bids'),
  bidsInCommon: Ember.computed.intersect('userBids', 'model.bids'),
  placedBid: Ember.computed.notEmpty('bidsInCommon')
  */

  init: function() {

    // if the job has a bid.id that matches the user's bid.id
    // set placedBid to true

    var model = this.get('model');
    var jobs = model.serialize();
    var bidsID = jobs.bids;

    var user = this.get('controllers.application.currentUser');
    var userInfo = user.serialize();
    var userBids = userInfo.bids;

    var hasBid = Ember.Object.createWithMixins({
      jobBid: bidsID,
      userBid: userBids,
      bidsInCommon: Ember.computed.intersect('jobBid', 'userBid')
    });

    var common = hasBid.get('bidsInCommon');
    var result = !!common.length;


    if (result === true) {
      this.set('placedBid', true);
    }

    //var cool = this.get('model.bids');

    //console.log(cool);
    // if (s === true) {
    //   console.log('cool');
    // } else {
    //   console.log('not quite');
    // }
  },

  // acceptedBids: Ember.computed.filter('bids', function(bid, index) {
  //   return bid.accepted;
  // }),

  bidsAccepted: function() {
    var cool = this.store.find('bid');
    var yes = cool.get('accepted');
    console.log(yes);
    if (yes === true) {
      return true;
    } else {
      return false;
    }
    console.log(cool);
  }

});
