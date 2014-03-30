// app/components/scribe-rte.js

export default Ember.TextArea.extend({ 
	didInsertElement: function(){
		console.log(this);
	}
});

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