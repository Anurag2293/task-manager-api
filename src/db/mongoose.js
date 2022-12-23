import mongoose from "mongoose";
import validator from "validator";

export default function connectDB () {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');
}

const Task = mongoose.model('Task', {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const task = new Task({
    description : 'Chant Hare Krishna Mahamantra',
    completed : true
})

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error)
// })