var SkillsView = Ember.View.extend({
	tagName: 							'section',
	classNames: 					['skills', 'module'],

	SkillItem: Ember.View.extend({
		attributeBindings: 	['data-state'],
		tagName: 						'li',

		// properties
		'data-state': function() {
			if(this.get('isSelected') === true)
				return 'is-selected';
			else
				return '';
		}.property('isSelected'),

		// actions
		click: function() {
			if(this.get('isSelected'))
				this.set('isSelected', false);
			else
				this.set('isSelected', true);
		}
		
	})


});

export default SkillsView;