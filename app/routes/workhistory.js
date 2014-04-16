/* /routes/workhistory.js */
export default Ember.Route.extend({
	model: function(params) { 
		return this.store.find('workhistory', params.workhistory_id);
	}
});