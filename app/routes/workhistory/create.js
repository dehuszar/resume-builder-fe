/* /routes/workhistory/create.js */

export default Ember.Route.extend({
	model: function(){
		// the model for this route is a new empty Ember.Object
		return Ember.Object.create({});
	},

	// in this case (the create route), we can reuse the workhistory/edit template
	// associated with the workhistoryCreateController
	renderTemplate: function(){
		this.render('workhistory.edit', {
			controller: 'workhistoriesCreateController'
		});
	}
});