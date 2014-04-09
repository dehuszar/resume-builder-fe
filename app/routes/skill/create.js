/* /routes/skill/create.js */

export default Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return Em.Object.create({});
  },

  // in this case (the create route), we can reuse the skill/edit template
  // associated with the skillsCreateController
  renderTemplate: function(){
    this.render('skill.edit', {
      controller: 'skillCreate'
    });
  }
});