import connectDB from "../src/db/mongoose.js";
import Task from '../src/models/task.js';

connectDB();

Task.findByIdAndDelete('63a5676b08e397b26326dc53').then((result) => {
    console.log(result);

    return Task.find({completed : false});
}).then((count) => {
    console.log(count);
}).catch(e => console.log(e));