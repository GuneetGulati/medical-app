import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  id: String,
  title: String,
  name: String,
  lastName: String,
  age: Number,
  gender: String,
  phone: Number,
  address: String,
  check: Number,
  specone: String,
});

export default mongoose.model("doctor", doctorSchema);
