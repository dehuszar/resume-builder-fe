var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('component-test');
	this.route('helper-test');
	
	// Skills
	this.resource('skills', function() {
		this.route('new');
	});

	// Work Histories
	this.resource('workhistories', function() {
		this.route('new');
	});

	// References
	this.resource('references', function() {
		this.route('new');
	});
});

export default Router;
