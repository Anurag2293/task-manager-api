import connectDB from '../src/db/mongoose.js';
import User from '../src/models/user.js';

connectDB();

// User.findByIdAndUpdate('63a4858873658222ce433ebb', { age : 1 }).then((user) => {
//     console.log(user);

//     return User.countDocuments({age : 1});
// }).then((count) => {
//     console.table(count);
// }).catch(e => console.log(e));

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });

    return count;
}

updateAgeAndCount('63a569708aca54075da2d9a8', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})