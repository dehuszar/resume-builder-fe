var ApplicationView = Ember.View.extend({
	id: 'application',

	// sub-views
	NavigationView: Ember.View.extend({
		attributeBindings:	['data-state'],
		classNames:					['modules sidebar'],
		tagName: 						'aside',

		// properties
		'data-state': function() {
			if (this.get('parentView.controller.isVisible'))
				return 'is-visible';
		}.property('parentView.controller.isVisible')
	})

});

export default ApplicationView;