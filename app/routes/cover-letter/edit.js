/* /routes/cover-letter/edit.js */
// import Scribe from "scribe";

export default Ember.Route.extend({
	model: function(){ 
		return this.modelFor('cover-letter');
	}
});