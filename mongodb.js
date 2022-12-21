// CRUD create read update delete

// import mongodb from 'mongodb';
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
import { MongoClient, ObjectId} from "mongodb";

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log('Error Connecting')
    }

    const db = client.db(databaseName);
    
    // db.collection('users').findOne({ _id : new ObjectId("63a2e37b7c405d20ef3588f2") }, (error, user) => {
    //     console.log(user);
    //     client.close();
    // });

    // db.collection('users').find({ age : 27 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age : 27 }).count((error, count) => {
    //     console.log(count);
    // })

    // TASK:
    db.collection('tasks').findOne({ _id : new ObjectId("63a2dee888d3eb5295dbc6aa") }, (error, lastTask) => {
        console.log(lastTask);
    })

    db.collection('tasks').find({ completed : false }).toArray((error, tasks) => {
        console.log(tasks);
        client.close();
    })
});