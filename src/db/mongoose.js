import mongoose from "mongoose";
import validator from "validator";

export default function connectDB () {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');
}