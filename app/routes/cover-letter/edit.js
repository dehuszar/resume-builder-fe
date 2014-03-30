/* /routes/cover-letter/edit.js */
export default Ember.Route.extend({
	model: function(){ 
		return this.modelFor('cover-letter');
	}
});