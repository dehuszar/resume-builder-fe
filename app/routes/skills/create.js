/* /routes/skills/create.js */

var SkillsCreateRoute = Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return this.store.createRecord('skill');
	},

	// in this case (the create route), we can reuse the skill/edit template
	// associated with the skillsCreateController
	renderTemplate: function(){
		this.render('skill.edit', {
			controller: 'skills.create'
		});
	}
});

export default SkillsCreateRoute;