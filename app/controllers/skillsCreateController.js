/* /controllers/skillsCreateController.js 
*/
var SkillsCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      // this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newSkill = this.store.createRecord('skill', this.get('model'));
      newSkill.save();

      // redirects to the skill itself
      this.transitionToRoute('skill', newSkill);
    }
  }
});

export default SkillsCreateController;