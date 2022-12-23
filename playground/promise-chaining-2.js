import connectDB from "../src/db/mongoose.js";
import Task from '../src/models/task.js';

connectDB();

// Task.findByIdAndDelete('63a5676b08e397b26326dc53').then((result) => {
//     console.log(result);

//     return Task.find({completed : false});
// }).then((count) => {
//     console.log(count);
// }).catch(e => console.log(e));

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed : false });

    return count;
}

deleteTaskAndCount('63a56e18323f36e33bfd50d4').then((count) => {
    console.log('count', count);
}).catch((e) => {
    console.log('e', e);
})