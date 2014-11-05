Final.Profile = DS.Model.extend({});

Final.ClientProfile = Final.Profile.extend({
	name: DS.attr('string'),
	info: DS.attr('string'),
	email: DS.attr('string'),
	number: DS.attr('string')
})
