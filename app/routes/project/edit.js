/* /routes/project/edit.js */
export default Ember.Route.extend({
	model: function(){ 
		return this.modelFor('project');
	}
});