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
			console.log(this);
			debugger
		},
		save: function(){
			var workhistory = this.get('model');
			// this will tell Ember-Data to save/persist the new record
			workhistory.save();
			// then transition to the current workhistory
			// this.transitionToRoute('workhistory', workhistory);
		}
	}
});

export default WorkhistoryEditController;