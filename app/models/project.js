var Project = DS.Model.extend({
	title:				DS.attr('string'),
	description:	DS.attr('string'),
	features:			DS.attr('array'),
	link: 				DS.attr('string')
});

export default Project;