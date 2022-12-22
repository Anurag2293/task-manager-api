import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name : {
        type: String
    },
    age: {
        type: Number
    }
});

// const me = new User({
//     name : 'Andrew',
//     age : 27
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });

const Task = mongoose.model('Task', {
    description : {
        type : String
    },
    completed : {
        type : Boolean
    }
})

const task = new Task({
    description : 'Chant Hare Krishna Mahamantra',
    completed : true
})

// try {
//     const res = await task.save();
//     console.log(res);
// } catch (error) {
//     console.log(error);
// }

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error)
})