/* /controllers/cover-letter/edit.js 
*/
var CoverLetterEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var coverLetter = this.get('model');
      // this will tell Ember-Data to save/persist the new record
      coverLetter.save();
      // then transition to the current coverLetter
      // this.transitionToRoute('coverLetter', coverLetter);
    }
  }
});

export default CoverLetterEditController;