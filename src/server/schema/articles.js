let mongoose = require("mongoose");
let Schema = mongoose.Schema;
// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
let ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String
  }
});
// Create the Model
let Article = mongoose.model("Article", ArticleSchema);
// Export it for use elsewhere
module.exports = Article;
