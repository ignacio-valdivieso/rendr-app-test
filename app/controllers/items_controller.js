module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Items', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      console.log(result.collection.models[0].get('data'));
      callback(err, result);
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: 'Item', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};