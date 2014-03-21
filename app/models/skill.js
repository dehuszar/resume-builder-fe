var Skill = DS.Model.extend({
	title:			DS.attr('string'),
	description:	DS.attr('string'),
	category:		DS.attr('string')
});

export default Skill;