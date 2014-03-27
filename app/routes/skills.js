export default Ember.Route.extend({
	model: function() {
		return this.store.find('skill');
	},

	actions: {
		edit: function(skill){
			this.transitionTo('skill.edit', skill);
		}
	}
});