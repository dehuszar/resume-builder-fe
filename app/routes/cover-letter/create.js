/* /routes/cover-letter/create.js */

export default Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return Ember.Object.create({});
	},

	// in this case (the create route), we can reuse the coverLetter/edit template
	// associated with the coverLettersCreateController
	renderTemplate: function(){
		this.render('coverLetter.edit', {
			controller: 'coverLetters.create'
		});
	}
});