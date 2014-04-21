/* /controllers/skills/create.js
*/
var SkillsCreateController = Ember.ObjectController.extend({
	createForm: 	true,

	categories: [
		{
			name: "Development Expertise", 
			slug: "development"
		},
		{
			name: "Sys-Admin Expertise", 
			slug: "sys-admin"
		}
	],
	selectedCategory: null,
	
	actions: {
		save: function(){
			// create a record and save it to the store
			this.get('model').save();

			// redirects to the user itself
			// this.transitionToRoute('workhistory', newWorkHistory);
		}
	}
});

export default SkillsCreateController;