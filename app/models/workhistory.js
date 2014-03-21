var Workhistory = DS.Model.extend({
	title:			DS.attr('string'),
	location:		DS.attr('string'),
	employedFrom:	DS.attr('string'),
	employedTo:		DS.attr('string'),
	position:		DS.attr('string'),
	description:	DS.attr('string'),
	// duty:			DS.hasMany('App.Duties')
});

export default Workhistory;

// var Duty = DS.Model.extend({
// 	duty:			DS.attr('string')
// });

// export default Duty;