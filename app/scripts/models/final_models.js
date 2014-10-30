Final.PostJob = DS.Model.extend({
	typeOfProject: DS.attr('string'),
});

Final.ClientProfile = DS.Model.extend({
	name: DS.attr('string'),
	info: DS.attr('string'),
	email: DS.attr('string'),
	number: DS.attr('string'),
  	
});



Final.Profile = DS.Model.extend({
	email: DS.attr('string'),
	
});





