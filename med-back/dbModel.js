import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    id:String,
    name:String,
    lastName:String,
    age:Number,
    gender:String,
    phone:Number,
    address:String
});

export default mongoose.model("patient",patientSchema)