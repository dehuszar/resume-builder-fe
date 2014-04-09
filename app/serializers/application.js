export default DS.JSONSerializer.extend({
	primaryKey: function(type) {
		return '_id';
	},

	serializeIntoHash: function(hash, type, record, options) {
		Ember.merge(hash, this.serialize(record, options));
	}
});