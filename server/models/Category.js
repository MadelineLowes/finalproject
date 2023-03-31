const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
