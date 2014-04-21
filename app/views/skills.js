var SkillsView = Ember.View.extend({
	tagName: 							'section',
	classNames: 					['skills', 'module'],

	SkillItem: Ember.View.extend({
		attributeBindings: 	['data-state'],
		tagName: 						'li',
		
		skillLeft: null,
		skillTop: null,
		skillHeight: null,

		didInsertElement: function() {
			var pos = this.$().position();

			this.set('skillLeft', pos.left);
			this.set('skillTop', pos.top);
		},

		// properties
		'data-state': function() {
			if(this.get('isSelected') === true)
				return 'is-selected';
			else
				return '';
		}.property('isSelected'),

		// actions
		click: function() {
			if(this.get('isSelected')) {
				Ember.run.later(this,function(){
					this.set('isSelected', false);
				}, 600);
			} else {
				this.$().css({"left": this.get('skillLeft'), "top": this.get('skillTop')}).animate({left: "0", top: "0"}, 500);
				this.set('isSelected', true);
				var desc = this.$().find('.desc').height();
				console.log("height: " + (desc + 36));
			}
		}
		
	})


});

export default SkillsView;