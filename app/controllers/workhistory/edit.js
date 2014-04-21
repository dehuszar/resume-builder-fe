/* /controllers/workhistory/edit.js 
*/
var WorkhistoryEditController = Ember.ObjectController.extend({
	editForm: 	true,
	actions: {
		addDuty: function() {
			if (this.get('duties'))
				this.get('duties').pushObject({duty: ''});
			else
				console.log('need duties');
		},
		removeDuty: function() {
			// Not implemented yet.
			// Need to convert fields to views so the 
			// delete button can delete the record in 
			// the current view context
		},
		save: function(){
			var workhistory = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			workhistory.save();
		}
	}
});

export default WorkhistoryEditController;