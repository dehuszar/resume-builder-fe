/* /routes/projects/create.js */

var ProjectsCreateRoute = Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return this.store.createRecord('project');
	},

	// in this case (the create route), we can reuse the projects/edit template
	// associated with the projectsCreateController
	renderTemplate: function(){
		this.render('project.edit', {
			controller: 'projects.create'
		});
	}
});

export default ProjectsCreateRoute;