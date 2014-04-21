# Resume Builder Front End

This project is the front end portion of a resume-building tool.  Currently, it is just a website, but more functionality is soon to come.  This piece requires use of the [Resume Builder API](https://github.com/dehuszar/resume-builder-api).

While the application is currently in a working state, setting it up from scratch may take some tinkering.  Please let me know if you need help getting set up.

It is assembled from [Ember App Kit](https://github.com/stefanpenner/ember-app-kit) and [SailsJS](https://github.com/balderdashy/sails) (for the api-side), so if you know how to set those up, you should be in good shape.  I am also using the excellent [Ember Data Sails Adapter] (https://github.com/bmac/ember-data-sails-adapter) to bridge the two, and MongoDB as my current data store.

The project uses a serializer to output Mongo-friendly JSON, so if you have trouble getting Ember to play nice with your non-Mongo store, check there first.

This project is VERY rough still, and my first real github contribution, so please be gentle.  :)

This application is NOT secured, so don't put up your own resume site and expect that no one can go in and trash your data.  It's coming, but it's not here presently.


## Features

- Create Edit forms for Skills, Work Histories, and Projects

- Mobile First responsive layout

- Some simple animations surrounding navigation and skill selection


## Future Goals

- Need forms for Education, and References

- Authentication and validation requirements for all forms

- PDF export

- Unit Testing

- A LOT more

## Feedback
Anyone who is interested in taking a look at this, I welcome any and all feedback, but constructive feedback is preferred.

## License

Still figuring out.  Will be Open-Source.  Don't feel constrained, I won't punk you later I promise.