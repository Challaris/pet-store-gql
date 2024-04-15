import mongoose from "mongoose";

const Pet = mongoose.model("Pet", {
  name: { type: String, required: true },
  species: { type: String, required: true },
  color: { type: String, required: true },
  breed: { type: String },
  sheltered: { type: Boolean, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
});

export default Pet;
