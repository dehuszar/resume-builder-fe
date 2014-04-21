// This serializer is to provide support 
// for Mongo's string-based ids.  If you 
// intend to use a relational/SQL-based 
// data-store, you can safely remove this 
// file
export default DS.JSONSerializer.extend({
	primaryKey: function(type) {
		return '_id';
	},

	serializeIntoHash: function(hash, type, record, options) {
		Ember.merge(hash, this.serialize(record, options));
	}
});