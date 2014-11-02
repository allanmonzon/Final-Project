Final.ClientProfile = DS.Model.extend({
	user: DS.belongsTo('client'),
	name: DS.attr('string'),
	info: DS.attr('string'),
	email: DS.attr('string'),
	number: DS.attr('string'),
});



Final.Profile = DS.Model.extend({
	email: DS.attr('string'),
	
});





