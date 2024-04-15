import mongoose from "mongoose";

const Owner = mongoose.model("Owner", {
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});

export default Owner;
