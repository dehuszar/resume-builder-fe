var ApplicationController = Ember.Controller.extend({
	isVisible: false,

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