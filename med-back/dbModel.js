import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    age:Number,
    gender:String,
    phone:Number,
    Address:String
});

export default mongoose.model("patient",patientSchema)