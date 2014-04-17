/* /routes/workhistories/create.js */

var WorkhistoriesCreateRoute = Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return this.store.createRecord('workhistory');
	},

	// in this case (the create route), we can reuse the workhistories/edit template
	// associated with the workhistoriesCreateController
	renderTemplate: function(){
		this.render('workhistory.edit', {
			controller: 'workhistories.create'
		});
	}
});

export default WorkhistoriesCreateRoute;