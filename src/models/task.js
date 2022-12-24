import mongoose, { Schema } from "mongoose"

const Task = mongoose.model('Task', {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    owner : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

export default Task;