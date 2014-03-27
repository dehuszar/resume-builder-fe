export default DS.JSONSerializer.extend({
	primaryKey: function(type) {
		return '_id';
	},
	
//   // Fix broken extractArray see:
//   // https://github.com/emberjs/data/pull/1479
//   extractArray: function(store, type, arrayPayload) {
//     var serializer = this;
//     return map.call(arrayPayload, function(singlePayload) {
//       return serializer.extractSingle(store, type, singlePayload);
//     });
//   },
//   // Allow JSONSerializer to work with RESTAdapter
//   // https://github.com/emberjs/data/blob/7e83ed158034cf7fedf2a7113a82de5d5ce67e76/packages/ember-data/lib/adapters/rest_adapter.js#L379
//   serializeIntoHash: function(hash, type, record, options) {
//     Ember.merge(hash, this.serialize(record, options));
//   }
});