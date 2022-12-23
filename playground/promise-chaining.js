import connectDB from '../src/db/mongoose.js';
import User from '../src/models/user.js';

connectDB();

User.findByIdAndUpdate('63a4858873658222ce433ebb', { age : 1 }).then((user) => {
    console.log(user);

    return User.countDocuments({age : 1});
}).then((count) => {
    console.table(count);
}).catch(e => console.log(e));