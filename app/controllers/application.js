var ApplicationController = Ember.Controller.extend({
	isVisible: false,
	updateCurrentPath: function() {
			App.set('currentPath', this.get('currentPath'));
	}.observes('currentPath'),

	actions: {
		open: function() {
			this.set('isVisible', true);
		},

		close: function() {
			this.set('isVisible', false);
		}
	}
});

export default ApplicationController;