const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "user" },
  property_id: { type: Schema.Types.ObjectId, required: true, ref: "property" },
  rating: String,
  feedback: String,
  reviewDate: Date,
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("review", reviewSchema);
