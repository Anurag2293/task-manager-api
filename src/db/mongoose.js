import mongoose from "mongoose";
import validator from "validator";

export default function connectDB () {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_URL);
}