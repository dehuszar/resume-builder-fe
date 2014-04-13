/* /components/scribe-rte.js */

 var ScribeRTE = Ember.TextArea.extend({
	classNames: ['scribe-html'],
	didInsertElement: function(){
  		var scribeElement = this.$();
		console.log(scribeElement);
		debugger;
		var scribe = new Scribe(scribeElement);
	}
});

export default ScribeRTE;

// From Scribe docs

// require(['scribe'], function (Scribe) {
//   var scribeElement = document.querySelector('.scribe');
//   // Create an instance of Scribe
//   var scribe = new Scribe(scribeElement);

//   // Use some plugins
//   scribe.use(scribePluginBlockquoteCommand());
//   var toolbarElement = document.querySelector('.toolbar');
//   scribe.use(scribePluginToolbar(toolbarElement));
// });