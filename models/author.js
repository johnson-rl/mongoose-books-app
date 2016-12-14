var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var authorSchema = new Schema({
    name: String,
    alive: Boolean,
    image: String
  })

  var Author = mongoose.model('Author', authorSchema);

  module.exports = Author;
