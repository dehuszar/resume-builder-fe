/* /controllers/project/edit.js 
*/
var ProjectEditController = Ember.ObjectController.extend({
	editForm: 	true,
	actions: {
		save: function(){
			var project = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			project.save();
			// then transition to the current project
			// this.transitionToRoute('project', project);
		}
	}
});

export default ProjectEditController;