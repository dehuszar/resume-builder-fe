var Workhistory = DS.Model.extend({
	title:			DS.attr('string'),
	location:		DS.attr('string'),
	employedFrom:	DS.attr('string'),
	employedTo:		DS.attr('string'),
	position:		DS.attr('string'),
	description:	DS.attr('string'),
	duties:			DS.attr()
});

export default Workhistory;