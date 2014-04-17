/* /controllers/projects/create.js
*/
var ProjectsCreateController = Ember.ObjectController.extend({
	createForm: 	true,
	features: [],
	actions: {
		addFeature: function() {
			if (this.get('features'))
				this.get('features').pushObject({description: ''});
			else
				console.log('need features');
		},
	actions: {
		save: function(){
			// just before saving, we set the creationDate
			// this.get('model').set('creationDate', new Date());

			// create a record and save it to the store
			this.get('model').save();

			// redirects to the user itself
			// this.transitionToRoute('workhistory', newWorkHistory);
		}
	}
});

export default ProjectsCreateController;