/* /controllers/projects/create.js
*/
var ProjectsCreateController = Ember.ObjectController.extend({
	createForm: 	true,
	features: [],
	actions: {
		addFeature: function() {
			if (this.get('features'))
				this.get('features').pushObject({description: ''});
			else
				console.log('need features');
		},
		save: function(){
			// create a record and save it to the store
			this.get('model').save();
		}
	}
});

export default ProjectsCreateController;