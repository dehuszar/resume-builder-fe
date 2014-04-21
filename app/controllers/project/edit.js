/* /controllers/project/edit.js 
*/
var ProjectEditController = Ember.ObjectController.extend({
	editForm: 	true,
	actions: {
		addFeature: function() {
			if (this.get('features'))
				this.get('features').pushObject({description: ''});
			else
				console.log('need features');
		},
		removeDuty: function() {
			// Not implemented yet.
			// Need to convert fields to views so the 
			// delete button can delete the record in 
			// the current view context
		},
		save: function(){
			var project = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			project.save();
		}
	}
});

export default ProjectEditController;