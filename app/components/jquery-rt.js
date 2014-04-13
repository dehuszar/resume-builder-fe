/* /components/jquery-rt.js */

var jqueryRT = Ember.TextArea.extend({
	classNames: ['editor'],

	didInsertElement: function(){
		var ta = this.$();
		console.log(ta);
		// ta.jqte();

		var renderedEditor = this.$().parents('.jqte').find('.jqte_editor');
		console.log(renderedEditor.html());
		// Ember.addObserver(renderedEditor, ta, function() {
		// 	this.set('ta', 'renderedEditor');
		// });
		// debugger;
	}
});

export default jqueryRT;