export default Ember.Route.extend({
	model: function() {
		return this.store.find('coverLetter');
	},

	actions: {
		edit: function(coverLetter){
			this.transitionTo('cover-letter.edit', coverLetter);
		},
		save: function(){
			var coverLetter = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			coverLetter.save();
			// then transition to the current skill
			this.transitionTo('cover-letter', coverLetter);
		}
	}
});