var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('component-test');
	this.route('helper-test');

	// Cover Letters
	this.resource('cover-letters', function(){
		this.resource('cover-letter', { path:'/:coverLetter_id' }, function(){
			this.route('edit');
		});
		this.route('create');
	});
	
	// Skills
	this.resource('skills', function() {
		this.resource('skill', { path:'/:skill_id' }, function(){
			this.route('edit');
		});
		this.route('create');
	});

	// Work Histories
	this.resource('workhistories', function() {
		this.resource('workhistory', { path:'/:workhistory_id' }, function(){
			this.route('edit');
		});
		this.route('create');
	});

	// References
	this.resource('references', function() {
		this.resource('reference', { path:'/:reference_id' }, function(){
			this.route('edit');
		});
		this.route('create');
	});
});

export default Router;
