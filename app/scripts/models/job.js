Final.Job = DS.Model.extend({
	user: DS.belongsTo('user'),
	typeOfProject: DS.attr('string'),
});