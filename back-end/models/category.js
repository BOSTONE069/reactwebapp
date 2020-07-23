const mongoose = require("mongoose");

const category = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("Category", category);
