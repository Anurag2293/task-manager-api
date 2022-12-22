import mongoose from "mongoose";
import validator from "validator";

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    password : {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate (value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain the word \'password\'')
            }
        }
    }
});

const me = new User({
    name : '   Mike   ',
    email : '  Mike@MEAD.IO  ',
    password : 'apords'
});

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });

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

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error)
})