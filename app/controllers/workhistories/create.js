/* /controllers/workhistories/create.js
*/
var WorkhistoriesCreateController = Ember.ObjectController.extend({
	createForm: 	true,
	duties: [],
	actions: {
		addDuty: function() {
			if (this.get('duties'))
				this.get('duties').pushObject({duty: ''});
			else
				console.log('need duties');
		},
		save: function(){
			// create a record and save it to the store
			this.get('model').save();
		}
	}
});

export default WorkhistoriesCreateController;