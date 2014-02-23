var Skill = DS.Model.extend({
	skillTitle: 		DS.attr('string'),
	skillDescription: 	DS.attr('string'),
	skillCategory: 		DS.attr('string')
});

Skill.reopenClass({
	FIXTURES: [{
		id: "1",
		title: "HTML5/CSS3",
		description: "HTML5 and CSS3 are the latest specifications for defining content and styling for the web.  The additions to the specification provide modern rich media types, and improved semantics which allow the web to become more of an application development platform that works across a variety of mobile and touch devices.",
		category: "Development Expertise"
	},{
		id: "2",
		title: "Mobile First Responsive Layouts",
		description: "Mobile First development and Responsive Web Design are technically two strategies.  The first attempts to create a baseline of reasonable defaults so that if every other aspect of your website fails, or is not supported by the browsing device, will display an attractive low-bandwidth mobile-friendly site.  Responsive Web Design refers to the ability to have a layout adapt to a variety of screen sizes, resolutions, and types.  The end result is a single website which elegantly adapts to potentially any browsing device or orientation.",
		category: "Development Expertise"
	},{
		id: "3",
		title: "JQuery, JQueryUI",
		description: "JQuery and JQueryUI are javascript libraries which make writing javascript routines and interactive interface elements a breeze.",
		category: "Development Expertise"
	},{
		id: "4",
		title: "ExpressionEngine CMS",
		description: "ExpressionEngine is a powerful framework for creating custom datatypes and displaying dynamic views of that data.  While it is a commercial product, it is built on the open-source PHP framework called Codeigniter.  If WordPress can be considered a publishing tool, ExpressionEngine would be a workshop for building printing presses.  I have built several web sites and applications with ExpressionEngine, and have yet to find a project more complicated than a simple blog or marketing site which could not be built better using it over alternative platforms.",
		category: "Development Expertise"
	},{
		id: "5",
		title: "WordPress CMS",
		description: "WordPress is a very popular open-source publishing program.  While technically a Content Management System, WordPress is at it's best for developing blogs and simple feeds of data.  I have created several websites using WordPress, and while I prefer to develop using ExpressionEngine, WordPress is still handy for small-scope or low-budget projects.",
		category: "Development Expertise"
	},{
		id: "6",
		title: "Vim",
		description: "Some folks like to use Dreamweaver to code their websites.  I've found that any tool that writes code for you, while saving time during the design process, adds to the debugging process and can create a tremendous drag on load times.  Vim makes hand-coding a breeze, and is installed on every UNIX-based system making it easy to code remotely on the server hosting the website.",
		category: "Development Expertise"
	},{
		id: "7",
		title: "Ubuntu Linux Desktops",
		description: "Ubuntu is a cutting edge, intuitive, touch-enabled open-source Linux distribution.  I have implemented Ubuntu desktops in several businesses who upon consultation realized they didn't really need to be spending their money on Windows software licenses, security, and maintenance costs.  Not every business can get away from specific Windows or Mac-based applications, but if one doesn't have such a constraint, the latest versions of Ubuntu provide one of the most elegent operating systems available.",
		category: "Sys-Admin Expertise"
	},{
		id: "8",
		title: "SSH / Rsync",
		description: "SSH is a mechanism for creating an encrypted connection between systems.  It allows you to remotely control, or otherwise communicate with other systems.  I use SSH to log into my development and staging servers to develop.  Rsync is a mechanism for keeping selected files and folders in sync.  Together with SSH, Rsync is an excellent mechanism for running incremental backups, or keeping resources available in multiple environments.",
		category: "Sys-Admin Expertise"
	}]
});

export default Skill;