/* /routes/skill/edit.js */
export default Ember.Route.extend({
	model: function(){ 
		return this.modelFor('skill');
	}
});