var Reference = DS.Model.extend({
	name:					DS.attr('string'),
	relationship:	DS.attr('string'),
	email:				DS.attr('string'),
	description:	DS.attr('string')
});

export default Reference;