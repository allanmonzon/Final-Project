Final.PostJob = DS.Model.extend({
	user: DS.belongsTo('client'),
	typeOfProject: DS.attr('string'),
});