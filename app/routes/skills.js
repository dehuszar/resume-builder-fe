export default Ember.Route.extend({
	model: function() {
		return this.store.find('skill');
	},

	actions: {
		// edit: function(skill){
		// 	this.transitionTo('skill.edit', skill);
		// },
		// save: function(){
		// 	var skill = this.get('model');
		// 	// this will tell Ember-Data to save/persist the new record
		// 	skill.save();
		// 	// then transition to the current skill
		// 	this.transitionTo('skill', skill);
		// }
	}
});