/* /routes/project/create.js */

export default Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return Ember.Object.create({});
	},

	// in this case (the create route), we can reuse the project/edit template
	// associated with the projectCreateController
	renderTemplate: function(){
		this.render('project.edit', {
			controller: 'projectsCreateController'
		});
	}
});