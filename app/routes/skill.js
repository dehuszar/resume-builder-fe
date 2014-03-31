/* /routes/skill.js */
export default Ember.Route.extend({
	model: function(params) { 
		return this.store.find('skill', params.skill_id);
	},

	actions: {
		save: function(){
			var skill = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			skill.save();
			// then transition to the current skill
			this.transitionTo('skill', skill);
		}
	}
});