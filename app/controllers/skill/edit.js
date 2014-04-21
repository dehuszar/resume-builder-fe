/* /controllers/skill/edit.js 
*/
var SkillEditController = Ember.ObjectController.extend({
	editForm: 	true,

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
      var skill = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      skill.save();
    }
  }
});

export default SkillEditController;