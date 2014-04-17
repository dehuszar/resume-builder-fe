/* /controllers/skills/create.js
*/
var SkillsCreateController = Ember.ObjectController.extend({
	createForm: 	true,
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

export default SkillsCreateController;