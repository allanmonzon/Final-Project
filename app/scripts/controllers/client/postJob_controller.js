Final.PostJobController = Ember.Controller.extend({
	needs: 'application',
	user: Ember.computed.alias('controllers.application.currentUser'),

	actions: {
		createJob: function(){
			var self = this;
			var workflow = Final.PostJobWorkflow.create({
				attributes: {
					typeOfProject: this.get('typeOfProject'),
					projectScope: this.get('projectScope'),
					feDeveloper: this.get('feDeveloper'),
					beDeveloper: this.get('beDeveloper'),
					webDesigner: this.get('webDesigner'),
					graphicDesigner: this.get('graphicDesigner'),
					copywriter: this.get('copywriter')
				},
				store: this.get('store'),
				userID: this.get('user.id')
			});
			workflow.run();
			self.transitionToRoute('my-jobs');
		}
	}

});


