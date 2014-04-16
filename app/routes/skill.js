/* /routes/skill.js */
export default Ember.Route.extend({
	model: function(params) { 
		return this.store.find('skill', params.skill_id);
	}
});