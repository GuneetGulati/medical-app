import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  id: String,
  name: String,
  lastName: String,
  age: Number,
  gender: String,
  phone: Number,
  address: String,
  check: Number,
});

export default mongoose.model("patient", patientSchema);
