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

   

  },

  



  /*
  userBids: Ember.computed.alias('controlers.application.currentUser.bids'),
  bidsInCommon: Ember.computed.intersect('userBids', 'model.bids'),
  placedBid: Ember.computed.notEmpty('bidsInCommon')
  */

});

