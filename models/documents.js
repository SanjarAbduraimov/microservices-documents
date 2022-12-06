var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  title: { type: String, unique: true },
  language: String,
  user: Schema.Types.ObjectId,
});

module.exports = mongoose.model("documents", usersSchema);
